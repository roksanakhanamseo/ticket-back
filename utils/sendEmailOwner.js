const nodeMailer = require("nodemailer");

const sendEmailOwner = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"New Visitor" <Tanviranjum010@gmail.com>',
    to: [options.email],
    subject: options.subject || "Thanks for reaching me out!",
    // html: "<h4>Congrats! Now you can reach me out through replying this email.</h4>",
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };
  await transporter.sendMail(mailOptions);
};
module.exports = { sendEmailOwner };
