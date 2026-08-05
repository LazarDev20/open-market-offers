import { NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { address, name, phone, email, situation, source } = body || {};

  // Basic validation — the four required fields.
  if (!address || !name || !phone || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.LEAD_NOTIFY_TO;

  const message =
    `🏠 NEW LEAD — Open Market Offers\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Address: ${address}\n` +
    `Situation: ${situation || "—"}\n` +
    `Source: ${source || "site"}`;

  // If Twilio isn't configured yet, don't fail the visitor —
  // log the lead and return success so the form still confirms.
  if (!sid || !token || !from || !to) {
    console.log("[LEAD] (Twilio not configured)\n" + message);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const client = twilio(sid, token);
    await client.messages.create({ body: message, from, to });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[LEAD] Twilio send failed:", err);
    // Still return ok so we never lose the lead to a UI error;
    // the console log preserves it.
    console.log("[LEAD] (send failed, preserved)\n" + message);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
