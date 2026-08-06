import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Lead handler.
 * Sends BOTH an email (via Resend) and an SMS (via Twilio) when a seller
 * submits the form. Each channel is independent: whichever is configured
 * (via env vars) fires. If neither is set, the lead is logged so nothing
 * is ever lost, and the visitor still gets a success confirmation.
 */
export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { address, name, phone, email, situation, source } = body || {};

  if (!address || !name || !phone || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const textBody = [
    `New lead — Open Market Offers`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address: ${address}`,
    `Situation: ${situation || "—"}`,
    `Source: ${source || "site"}`,
    `Submitted: ${submittedAt} PT`,
  ].join("\n");

  // Fire both channels in parallel; neither blocks the other.
  const [emailed, texted] = await Promise.all([
    sendEmail({ name, phone, email, address, situation, source, submittedAt, textBody }),
    sendSms(textBody),
  ]);

  // Always preserve the lead in logs as a backstop.
  if (!emailed && !texted) {
    console.log("[LEAD] (no channel delivered — preserved)\n" + textBody);
  }

  return NextResponse.json({ ok: true, emailed, texted });
}

// ── Email via Resend ─────────────────────────────────────────
async function sendEmail(d: {
  name: string; phone: string; email: string; address: string;
  situation?: string; source?: string; submittedAt: string; textBody: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "Open Market Offers <onboarding@resend.dev>";
  if (!apiKey || !to) return false;

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f2a3f">
      <div style="background:#0f2a3f;color:#fff;padding:18px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:18px">🏠 New lead — Open Market Offers</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;border:1px solid #dbe4e7;border-top:none;border-radius:0 0 12px 12px;overflow:hidden">
        ${row("Name", esc(d.name))}
        ${row("Phone", `<a href="tel:${esc(d.phone)}" style="color:#0e7c7b">${esc(d.phone)}</a>`)}
        ${row("Email", `<a href="mailto:${esc(d.email)}" style="color:#0e7c7b">${esc(d.email)}</a>`)}
        ${row("Address", esc(d.address))}
        ${row("Situation", esc(d.situation || "—"))}
        ${row("Source", esc(d.source || "site"))}
        ${row("Submitted", `${esc(d.submittedAt)} PT`)}
      </table>
      <p style="font-size:12px;color:#3d5568;margin-top:14px">Reply fast — sent automatically from openmarketoffers.com.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `New lead: ${d.name} — ${d.address}`,
        text: d.textBody,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[LEAD] Resend failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[LEAD] Email error:", err);
    return false;
  }
}

// ── SMS via Twilio ───────────────────────────────────────────
async function sendSms(textBody: string): Promise<boolean> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!sid || !token || !from || !to) return false;

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: "Basic " + Buffer.from(`${sid}:${token}`).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ To: to, From: from, Body: textBody }).toString(),
      }
    );
    if (!res.ok) {
      console.error("[LEAD] Twilio failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[LEAD] SMS error:", err);
    return false;
  }
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:11px 24px;border-bottom:1px solid #eef3f4;font-size:12px;font-weight:600;color:#3d5568;text-transform:uppercase;letter-spacing:.04em;width:110px;vertical-align:top">${label}</td>
    <td style="padding:11px 24px;border-bottom:1px solid #eef3f4;font-size:15px;color:#0f2a3f">${value}</td>
  </tr>`;
}

function esc(s: string) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
