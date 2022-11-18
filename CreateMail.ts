import TransportService from './TransportService';

const randomWords = require('random-words');

export default class CreateMail {
  transport = new TransportService()

exampleHTMLString = `<b>Hello! ${randomWords()} ${'<form action="http://localhost:3000/send-mail-2">\n'
+ '    <input type="submit" value="Click" />\n'
+ '</form></b>'}`

exampleString = `${'Hey there, this is our second message sent with Nodemailer ;) '
             + ''}${randomWords}`

sendMailFirst() {
  this.transport.transport().sendMail(this.createMail(), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

sendMailSecond() {
  this.transport.transport().sendMail(this.createSecondMail(), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

private createMail(htmlString:string = this.exampleHTMLString) {
  return {
    from: '"Example Team" <pawwel12345@yandex.com>',
    to: 'stepaniuk.pawel@gmail.com',
    subject: 'Nice Nodemailer test',
    text: '',
    html: htmlString,
  };
}

private createSecondMail(textString:string = this.exampleString) {
  return {
    from: '"Example Team" <pawwel12345@yandex.com>',
    to: 'stepaniuk.pawel@gmail.com',
    subject: 'Nice Nodemailer test',
    text: textString,
    html: 'Drugi mail',
  };
}
}
