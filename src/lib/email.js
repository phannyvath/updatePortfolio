const EMAILJS_SERVICE_ID = 'service_1bu7hfg'
const EMAILJS_TEMPLATE_ID = 'template_mc888c9'
const EMAILJS_PUBLIC_KEY = 'sEwDAUPnpjhbB8p-o'
const CONTACT_EMAIL = 'nyvathnyvath@gmail.com'

export const sendContactEmail = async ({ name, email, message }) => {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        reply_to: email,
        message,
        to_email: CONTACT_EMAIL,
      },
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'EmailJS failed to send the message.')
  }
}
