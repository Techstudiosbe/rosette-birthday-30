import { Resend } from "resend";

export type GuestMessage = {
  name: string;
  favourite: string;
  funny?: string;
  blessing: string;
  anything?: string;
};

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");

function html(m: GuestMessage) {
  const row = (label: string, value?: string) =>
    value?.trim()
      ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eaddc7;">
           <div style="font:600 12px/1.4 Georgia,serif;letter-spacing:.12em;text-transform:uppercase;color:#9b3a2d;">${esc(label)}</div>
           <div style="font:16px/1.5 Georgia,serif;color:#1a1a1a;margin-top:4px;">${esc(value)}</div>
         </td></tr>`
      : "";
  return `<div style="background:#faf3e8;padding:24px;">
    <div style="max-width:560px;margin:auto;background:#fff8ee;border:1px solid #eaddc7;border-radius:10px;padding:28px;">
      <h1 style="font:700 24px/1.2 Georgia,serif;color:#1a1a1a;margin:0 0 4px;">A new birthday message 💛</h1>
      <p style="font:14px/1.5 Georgia,serif;color:#6b5b45;margin:0 0 16px;">From <strong>${esc(m.name)}</strong> for your 30th.</p>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Favourite thing about Rosette", m.favourite)}
        ${row("A funny memory", m.funny)}
        ${row("Encouragement / prayer / blessing", m.blessing)}
        ${row("Anything else", m.anything)}
      </table>
    </div>
  </div>`;
}

/** Sends the guest message to Rosette. Returns false if email isn't configured. */
export async function sendGuestMessage(m: GuestMessage): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.ROSETTE_EMAIL;
  if (!key || !to) {
    console.warn("[messages] RESEND_API_KEY / ROSETTE_EMAIL not set — message not emailed:", m);
    return false;
  }
  const resend = new Resend(key);
  const from = process.env.RESEND_FROM || "Rosette's 30th <onboarding@resend.dev>";
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: undefined,
    subject: `💌 Birthday message from ${m.name}`,
    html: html(m),
  });
  if (error) throw new Error(error.message);
  return true;
}
