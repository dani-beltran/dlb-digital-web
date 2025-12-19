import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

/**
 * Sends an email using EmailJS
 * @param {Object} emailData - The email data
 * @param {string} emailData.name - Sender's name
 * @param {string} emailData.email - Sender's email
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.message - Email message
 * @returns {Promise<Object>} Response object with status and message
 */
export const sendEmail = async ({ name, email, subject, message }) => {
  try {
    console.log('Sending email with the following data:', { name, email, subject, message });
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: `${name} says:\n${message}`,
        to_name: 'DLB Digital',
      },
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.'
      };
    }

    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or email us directly.',
      error
    };
  }
};
