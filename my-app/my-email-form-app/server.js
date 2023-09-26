const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendEmail', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'ваш_email@gmail.com',
      pass: 'ваш_пароль',
    },
  });

  const mailOptions = {
    from: 'ваш_email@gmail.com',
    to: 'получатель@gmail.com',
    subject: 'Сообщение с формы обратной связи',
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Произошла ошибка при отправке письма.');
    } else {
      console.log('Письмо успешно отправлено: ' + info.response);
      res.status(200).send('Письмо успешно отправлено.');
    }
  });
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000.');
});
