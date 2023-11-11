import React from 'react'
import './Main.css'
import logo from '../../public/logo.png'
import Icon1 from '../../public/Icons/Icon (1).png'
import Icon2 from '../../public/Icons/Icon (2).png'
import Icon3 from '../../public/Icons/Icon (3).png'
import Icon4 from '../../public/Icons/Icon (4).png'
import Icon5 from '../../public/Icons/Icon (5).png'

export const Main = () => {
    return (
        <div className="main-container">
            {/* Левый столбец */}
            <div className="present-container">
                {/* Оберните .wellcome-image, .text-section и .form-container в один ряд */}
                <div className="wellcome-content">
                    {/* Добавьте элемент с изображением */}
                    <div className="wellcome-image"></div>
                    {/* Добавьте абзац с текстом */}
                    <div className="text-section">
                        <p className="Wellcome-text">
                            Добро пожаловать на наш сайт! <br />
                            Пересадка волос в Турции - это не только решение
                            проблемы с волосами, но и выгодное вложение в себя.
                            Мы предоставляем профессиональные услуги пересадки
                            волос, основанные на передовых методах FUE <br /> и
                            опыте выдающихся специалистов. <br />У нас вы
                            найдете надежное решение для ваших потребностей.
                            Турция - флагман среди стран, где проводят пересадку
                            волос методом FUE. И Это не единственный плюс нашего
                            предложения!
                        </p>
                    </div>

                    {/* Правый столбец с формой */}
                    <div className="form-container">
                        {/* Вставьте логотип здесь */}
                        <img
                            src={logo}
                            className="logo-form-container"
                            alt="Логотип"
                        />
                        <div id="notification" class="hidden">
                            Ваша заявка отправлена
                        </div>

                        <form class="decor" action="/sendemail" method="POST">
                            <div className="form-left-decoration"></div>
                            <div className="form-right-decoration"></div>
                            <div className="circle"></div>
                            <div className="form-inner">
                                <h3>Связаться с нами</h3>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше Имя"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Номер телефона"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Ваш город"
                                />
                                <div className="form-group">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="consent"
                                    />
                                    <label htmlFor="consent">
                                        *Вы согласны с законом о персональных
                                        данных
                                    </label>
                                </div>
                                <input type="submit" value="Отправить" />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Оберните все logo-section в отдельный div */}
                <div className="logo-wrapper">
                    {/* Add logo and text for each section */}
                    <div className="logo-section">
                        <img
                            src={Icon5}
                            alt="Пересадка дешевле"
                            className="custom-logo"
                        />
                        <p>
                            Дешевле <br /> чем в России
                        </p>
                    </div>

                    <div className="logo-section">
                        <img
                            src={Icon4}
                            alt="Пять дней в Турции"
                            className="custom-logo"
                        />
                        <p>
                            Всего 5 дней <br /> в Турции
                        </p>
                    </div>

                    <div className="logo-section">
                        <img
                            src={Icon3}
                            alt="Анестезия"
                            className="custom-logo"
                        />
                        <p>
                            С анастезией <br /> без боли
                        </p>
                    </div>

                    <div className="logo-section">
                        <img
                            src={Icon2}
                            alt="Метод FUE"
                            className="custom-logo"
                        />
                        <p>
                            Современный <br /> метод FUE
                        </p>
                    </div>

                    <div className="logo-section">
                        <img
                            src={Icon1}
                            alt="Лучший врач"
                            className="custom-logo"
                        />
                        <p>
                            Один из лучших <br /> врачей Турции
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
