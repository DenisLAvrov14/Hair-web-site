const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendEmail', (req, res) => {
  const { phone, city, name } = req.body;

  require('dotenv').config(); // Загружаем переменные среды из файла .env

  // Создаем объект transporter, используя переменные среды
  const transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
      user: process.env.YANDEX_USER, // Взять адрес из переменной среды
      pass: process.env.YANDEX_PASS, // Взять пароль из переменной среды
    },
  });
  

  const mailOptions = {
    from: 'DenisLavrov16@yandex.ru',
    to: 'Denislavrov14@gmail.com',
    subject: 'Заявка',
    text: `Имя: ${name}\nEmail: ${phone}\nСообщение: ${city}`,
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
