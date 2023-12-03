const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

require('dotenv').config() // Загружаем переменные среды из файла .env

app.post('/sendmail', (req, res) => {
    const { phone, city, name } = req.body

    // Создаем объект transporter, используя переменные среды
    const transporter = nodemailer.createTransport({
        //service: 'mail.ru',
        host: 'smtp.mail.ru',
        port: 465, // Вернуть порт 465
        secure: true, // Вернуть secure: true
        logger: true,
        debug: true,
        secureConnection: false, // Исправить опечатку в secureConnection
        auth: {
            user: process.env.MAILRU_USER,
            pass: process.env.MAILRU_PASS,
        },
        tls: {
            rejectUnauthorized: false, // Исправить опечатку в rejectUnauthorized
        },
    })

    const mailOptions = {
        from: 'mercin.med@mail.ru',
        to: ['Denislavrov14@gmail.com', 'saleten03@gmail.com'],
        subject: 'Заявка',
        text: `Имя: ${name}\nEmail: ${phone}\nГород: ${city}`,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.status(500).send('Произошла ошибка при отправке письма.')
        } else {
            // После успешной отправки формы, выполните редирект на домашнюю страницу
            res.redirect('http://mercinmed.ru/')
        }
    })
})

app.listen(8000, () => {
    console.log('Сервер запущен на порту 8000.')
})
