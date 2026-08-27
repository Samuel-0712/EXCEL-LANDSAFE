import { COMPANY_INFO } from '../data/siteData';

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || '';

export interface LeadEmailPayload {
  fullName: string;
  email: string;
  phone: string;
  destination?: string;
  message?: string;
}

/**
 * 1. Admin Email Notification (Sent to Excel Landsafe team / samuelleodada@gmail.com)
 */
export async function sendLeadEmailNotification(payload: LeadEmailPayload) {
  if (!RESEND_API_KEY) {
    console.info("Resend API key missing. Internal email notification skipped.");
    return { success: false, error: 'Missing API Key' };
  }

  const submissionTimestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const rawPhone = payload.phone.replace(/[^+\d]/g, '');

  try {
    const fromAddress = import.meta.env.VITE_SENDER_EMAIL || 'Excel Landsafe <info@excellandsafe.com.ng>';
    const adminRecipients = [COMPANY_INFO.email, 'samuelleodada@gmail.com'];

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: adminRecipients,
        subject: `New Lead Inquiry: ${payload.fullName} (${submissionTimestamp.split(',')[0]})`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; margin: 0 auto;">
            
            <!-- Header Banner -->
            <div style="background-color: #4A7C3C; padding: 18px 24px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Website Consultation Request</h2>
            </div>
            
            <p style="font-size: 14px; color: #4a5568; margin-bottom: 16px;">
              A new client lead has submitted an inquiry on the Excel Landsafe website. Details are listed below for fast response tracking:
            </p>
            
            <!-- Details Table -->
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; width: 140px; color: #2d3748;">Client Name:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c; font-weight: 600;">${payload.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Phone Number:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7;">
                  <a href="tel:${rawPhone}" style="color: #4A7C3C; font-weight: 700; text-decoration: underline;">
                    ${payload.phone}
                  </a>
                  <span style="font-size: 12px; color: #718096; margin-left: 6px;">(Tap to call)</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Email Address:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7;">
                  <a href="mailto:${payload.email}" style="color: #4A7C3C; font-weight: 600; text-decoration: underline;">
                    ${payload.email}
                  </a>
                </td>
              </tr>
              ${payload.destination ? `
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Destination:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">${payload.destination}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Travel Details:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c; line-height: 1.5;">${payload.message || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #718096;">Submission Time:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #718096; font-size: 13px;">${submissionTimestamp}</td>
              </tr>
            </table>

            <!-- Quick Action Buttons -->
            <div style="margin-top: 24px; padding: 16px; background-color: #faf7f2; border-radius: 12px; text-align: center;">
              <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: bold; color: #2d3748;">Instant Response Options:</p>
              <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                <a href="tel:${rawPhone}" style="display: inline-block; background-color: #4A7C3C; color: #ffffff; padding: 10px 18px; border-radius: 20px; font-size: 13px; font-weight: bold; text-decoration: none; margin-right: 8px;">
                  📞 Call Client Now
                </a>
                <a href="https://wa.me/${rawPhone}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 10px 18px; border-radius: 20px; font-size: 13px; font-weight: bold; text-decoration: none;">
                  💬 WhatsApp Client
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #edf2f7; text-align: center; color: #a0aec0; font-size: 12px;">
              Excel Landsafe Travels & Tours Ltd • Automated Lead Advisory System
            </div>
          </div>
        `
      })
    });

    const data = await res.json();
    return { success: res.ok, data };
  } catch (err: any) {
    console.error("Resend internal notification exception:", err);
    return { success: false, error: err };
  }
}

/**
 * 2. Client Auto-Confirmation Email (Sent directly to the user who filled the form)
 */
export async function sendClientAutoConfirmationEmail(payload: LeadEmailPayload) {
  if (!RESEND_API_KEY) {
    console.info("Resend API key missing. Client auto-reply skipped.");
    return { success: false, error: 'Missing API Key' };
  }

  const firstName = payload.fullName.trim().split(' ')[0] || payload.fullName.trim();
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Excel Landsafe, I just submitted an inquiry on your website.`)}`;

  try {
    const fromAddress = import.meta.env.VITE_SENDER_EMAIL || 'Excel Landsafe <info@excellandsafe.com.ng>';
    const clientRecipient = payload.email || 'samuelleodada@gmail.com';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [clientRecipient],
        subject: `We've received your inquiry, ${firstName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; margin: 0 auto;">
            
            <!-- Header Banner -->
            <div style="background-color: #4A7C3C; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Excel Landsafe Travels & Tours</h2>
            </div>

            <!-- Warm Greeting -->
            <p style="font-size: 15px; color: #1a202c; font-weight: 600; margin-bottom: 14px;">Hi ${firstName},</p>

            <p style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
              Thanks for reaching out to Excel Landsafe Travels & Tours. We've received your inquiry and one of our travel consultants will be in touch shortly.
            </p>

            <!-- Quoted Message Block -->
            <div style="background-color: #faf7f2; border-left: 4px solid #4A7C3C; padding: 16px 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
              <p style="font-size: 11px; font-weight: 700; color: #4A7C3C; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">What you told us:</p>
              <p style="font-size: 14px; color: #2d3748; font-style: italic; margin: 0; line-height: 1.5;">
                "${payload.message || 'General Travel & Visa Consultation Request'}"
              </p>
            </div>

            <!-- Urgent Action Path -->
            <p style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 14px;">
              If it's urgent, you can chat with us directly on WhatsApp:
            </p>

            <!-- WhatsApp Styled Button -->
            <div style="margin-bottom: 28px;">
              <a href="${whatsappUrl}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 24px; font-size: 14px; font-weight: 700; text-decoration: none; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                💬 Chat Live on WhatsApp (${COMPANY_INFO.phone})
              </a>
            </div>

            <!-- Signoff -->
            <div style="font-size: 14px; color: #2d3748; line-height: 1.6; margin-bottom: 24px;">
              Talk soon,<br />
              <strong>Excel Landsafe Travels & Tours Ltd</strong>
            </div>

            <!-- Footer -->
            <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #edf2f7; text-align: center; color: #a0aec0; font-size: 12px;">
              Excel Landsafe Travels & Tours Ltd • Luxury Hospitality & Visa Advisory
            </div>
          </div>
        `
      })
    });

    const data = await res.json();
    return { success: res.ok, data };
  } catch (err: any) {
    console.error("Resend client auto-reply exception:", err);
    return { success: false, error: err };
  }
}

/**
 * Dispatches both internal admin alert and client auto-confirmation email
 */
export async function sendAllLeadNotifications(payload: LeadEmailPayload) {
  const [adminRes, clientRes] = await Promise.allSettled([
    sendLeadEmailNotification(payload),
    sendClientAutoConfirmationEmail(payload)
  ]);

  return { adminRes, clientRes };
}
