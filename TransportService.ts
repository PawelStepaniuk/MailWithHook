import * as nodemailer from 'nodemailer';

require('custom-env').env('pass');

export default class TransportService {
  transport() {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
      },
    });
  }
}
