import React from 'react'
import './Main.css'
import logo from '../../public/logo.png'
import { NavLink } from 'react-router-dom'

export const Main = () => {
    return (
        <div className="main-container">
            {/* Контейнер с логотипом */}
            <div className="custom-logo-container">
                <img src={logo} alt="Logo" className="custom-logo" />
            </div>

            {/* Продающий текст */}
            <div className="selling-text">
                <h2>Ваш лучший выбор для красивых волос!</h2>
                <p>
                    Мы предлагаем широкий спектр услуг по уходу за волосами и
                    созданию стильных причесок. Наши опытные стилисты помогут
                    вам подобрать идеальный образ и подчеркнуть вашу красоту.
                </p>
                <NavLink to="/application-form">
                    <button>Оставить заявку</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Main
