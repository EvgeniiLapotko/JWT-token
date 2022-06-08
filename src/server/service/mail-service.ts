import nodemailer from 'nodemailer';

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport(); // {host: 'host', port: 'port', secure: false, auth: { user: 'login', pass: 'password'}};
  }
  async sendActivationMail(email: string, link: string) {
    await this.transporter.sendMail({
      from: 'email from mail',
      to: email,
      subject: 'Активвация почты',
      text: '',
      html: `<h1>Activated</h1>`,
    });
  }
}

export default new MailService();
