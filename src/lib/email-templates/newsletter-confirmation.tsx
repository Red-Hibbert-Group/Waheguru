interface NewsletterEmailProps {
  email: string
}

/**
 * Generate the HTML email template for newsletter confirmations
 * @param props - Newsletter email props including email
 * @returns HTML string for the email
 */
export function generateNewsletterEmailTemplate({ email }: NewsletterEmailProps): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Waheguru Newsletter</title>
    <style>
      .button-hover:hover {
        background: linear-gradient(90deg, #FFB84D, #FF9D00) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 12px rgba(255, 157, 0, 0.3) !important;
      }
    </style>
  </head>
  <body style='background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Waheguru Newsletter: Latest events, spiritual teachings, and community updates
    </div>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
      <tbody>
        <tr style="width:100%">
          <td>
            <div style="padding:20px 48px">
              <div style="display:flex;align-items:center">
                <div style="display:inline-block">
                  <span style="background:linear-gradient(90deg, #F0A500 0%, #444444 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:28px;font-weight:600">Wahe</span><span style="color:#444444;font-size:28px;font-weight:600">guru</span>
                </div>
              </div>
            </div>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding:0 48px">
              <tbody>
                <tr>
                  <td>
                    <div style="width:100%;height:4px;background:linear-gradient(90deg, #F0A500, #444444);margin:0 0 20px 0;border-radius:2px"></div>
                    
                    <h1 style="color:#333333;font-size:24px;line-height:32px;text-align:center;margin:24px 0">
                      Waheguru Community Updates
                    </h1>
                    
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Dear Friend,
                    </p>
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Thank you for subscribing to the Waheguru newsletter! You'll now receive our latest updates, focused on seva and spiritual guidance.
                    </p>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <div style="font-style:italic;color:#525f7f;margin-bottom:16px">
                        "He who earns with the sweat of his brow and shares with others, has discovered the path of righteousness."
                        — Guru Nanak Dev Ji
                      </div>
                    </div>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <h2 style="color:#333333;font-size:18px;margin:0 0 16px 0">Upcoming Events</h2>
                      <ul style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                        <li style="margin-bottom:8px">Annual Cultural Celebration - Fremont Gurdwara</li>
                        <li style="margin-bottom:8px">Youth Leadership Workshop - Community Center</li>
                        <li>Community Service Day - Various Locations</li>
                      </ul>
                    </div>

                    <h2 style="color:#333333;font-size:20px;margin:32px 0 16px 0;text-align:center">
                      Community Highlights
                    </h2>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      <strong>Seva in Action:</strong> Our outreach program served meals to underserved neighborhoods, embodying Vand Chhako - sharing with others.
                    </p>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      <strong>Educational:</strong> The Sikh Education Program welcomes new students each month.
                    </p>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <h2 style="color:#333333;font-size:18px;margin:0 0 16px 0">Monthly Focus: Naam Japo</h2>
                      <p style="color:#525f7f;font-size:16px;line-height:24px;margin:0">
                        Practice meditation on God's name through simran and kirtan for inner peace. Join our daily sessions at the Gurdwara.
                      </p>
                    </div>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin:24px 0">
                      For more information, contact us at 
                      <a href="mailto:contact@waheguru.com" style="color:#FF9D00;text-decoration-line:none" target="_blank">
                        contact@waheguru.com
                      </a>.
                    </p>

                    <a href="https://waheguru-delta.vercel.app/" class="button-hover" style="line-height:100%;text-decoration:none;display:block;max-width:300px;background:linear-gradient(90deg, #FF9D00, #FFB84D);border-radius:8px;color:#fff;font-size:16px;font-weight:600;text-align:center;padding:16px 24px;margin:32px auto;transition:all 0.3s ease;box-shadow:0 4px 8px rgba(255, 157, 0, 0.2)" target="_blank">
                      <span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">
                        View All Events
                      </span>
                    </a>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      In service to the sangat,<br/>
                      The Waheguru Team
                    </p>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>

                    <p style="font-size:12px;line-height:16px;color:#8898aa;text-align:center;margin-bottom:16px;margin-top:16px">
                      © 2024 Waheguru. All rights reserved.<br/>
                      This newsletter was sent to ${email} because you subscribed to our updates.<br/>
                      If you wish to unsubscribe, please <a href="https://waheguru-delta.vercel.app/unsubscribe?email=${encodeURIComponent(email)}" style="color:#FF9D00;text-decoration-line:none">click here</a>.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
} 