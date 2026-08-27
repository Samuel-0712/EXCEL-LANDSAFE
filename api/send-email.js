export default async function handler(req, res) {
  // Set CORS headers for security
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }
  const { fullName, email, phone, destination, message } = body || {};

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY || '';
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured on server');
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured' });
  }

  const fromAddress = process.env.VITE_SENDER_EMAIL || process.env.SENDER_EMAIL || 'Excel Landsafe <info@excellandsafe.com.ng>';
  const adminRecipients = ['info@excellandsafe.com.ng', 'samuelleodada@gmail.com'];

  const submissionTimestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const rawPhone = (phone || '').replace(/[^+\d]/g, '');

  try {
    // 1. Send Admin Notification Email
    const adminEmailPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddress,
        to: adminRecipients,
        subject: `New Lead Inquiry: ${fullName || 'New Client'} (${submissionTimestamp.split(',')[0]})`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; margin: 0 auto;">
            <div style="background-color: #4A7C3C; padding: 18px 24px; border-radius: 12px; margin-bottom: 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Website Consultation Request</h2>
            </div>
            <p style="font-size: 14px; color: #4a5568; margin-bottom: 16px;">
              A new client lead has submitted an inquiry on the Excel Landsafe website. Details are listed below for fast response tracking:
            </p>
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; width: 140px; color: #2d3748;">Client Name:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c; font-weight: 600;">${fullName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Phone Number:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7;">
                  <a href="tel:${rawPhone}" style="color: #4A7C3C; font-weight: 600; text-decoration: none;">${phone || 'N/A'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Email Address:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7;">
                  <a href="mailto:${email}" style="color: #4A7C3C; text-decoration: none;">${email || 'N/A'}</a>
                </td>
              </tr>
              ${destination ? `
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Destination / Service:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #1a202c;">${destination}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #edf2f7; color: #2d3748;">Message / Notes:</td>
                <td style="padding: 10px 12px; border-bottom: 1px solid #edf2f7; color: #4a5568; line-height: 1.5;">${message || 'No additional message provided.'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://wa.me/${rawPhone}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px;">Chat on WhatsApp with ${(fullName || 'Client').split(' ')[0]}</a>
            </div>
          </div>
        `
      })
    }).then(r => r.json());

    // 2. Send Client Confirmation Email (if valid email provided)
    let clientEmailPromise = Promise.resolve({ skipped: true });
    if (email && email.includes('@')) {
      const firstName = (fullName || 'Valued Client').trim().split(' ')[0];
      clientEmailPromise = fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [email],
          subject: `We've received your inquiry, ${firstName}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; margin: 0 auto;">
              <div style="background-color: #4A7C3C; padding: 20px 24px; border-radius: 12px; margin-bottom: 24px;">
                <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Excel Landsafe Travels & Tours</h2>
              </div>
              <p style="font-size: 15px; color: #1a202c; font-weight: 600; margin-bottom: 14px;">Hi ${firstName},</p>
              <p style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to Excel Landsafe Travels & Tours. We have received your inquiry and our travel advisory team is currently reviewing your request.
              </p>
              <p style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 20px;">
                One of our senior consultants will contact you shortly via phone/WhatsApp or email with tailored options.
              </p>
              <div style="background-color: #f7fafc; border-left: 4px solid #4A7C3C; padding: 14px 18px; margin-bottom: 24px; border-radius: 4px;">
                <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: bold; color: #2d3748;">Your Inquiry Summary:</p>
                <p style="margin: 0; font-size: 13px; color: #718096; line-height: 1.5;">${message || (destination ? `Inquiry regarding ${destination}` : 'General travel consultation')}</p>
              </div>
              <p style="font-size: 14px; color: #4a5568; margin-bottom: 16px;">
                Need urgent assistance? Chat directly with us on WhatsApp:
              </p>
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://wa.me/2348182681372" style="display: inline-block; background-color: #4A7C3C; color: #ffffff; padding: 12px 28px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 14px;">Chat Directly on WhatsApp</a>
              </div>
              <div style="border-top: 1px solid #edf2f7; padding-top: 20px; font-size: 12px; color: #a0aec0; text-align: center;">
                Excel Landsafe Travels & Tours • 60 Allen Avenue, by Adeboye Sholanke Entrance Gate, Ikeja, Lagos<br/>
                Phone: +234 818 268 1372 • Email: info@excellandsafe.com.ng
              </div>
            </div>
          `
        })
      }).then(r => r.json());
    }

    const [adminRes, clientRes] = await Promise.all([adminEmailPromise, clientEmailPromise]);

    return res.status(200).json({ success: true, adminRes, clientRes });
  } catch (err) {
    console.error('Serverless email dispatch error:', err);
    return res.status(500).json({ error: err.message });
  }
}
