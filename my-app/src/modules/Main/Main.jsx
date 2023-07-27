// Main.jsx
import React from 'react'
import './Main.css' // Импортируем файл стилей Main.css
import logo from '../../public/logo.png' // Импортируйте логотип
// import FormButton from './FormButton'

export const Main = () => {
    return (
        <div className="main-container">
            {/* Контейнер с логотипом */}
            {/* <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div> */}

            {/* Изображение в качестве фона */}
            {/* <div className="background-image" /> */}

            {/* Форма для текста */}
            <form className="text-form">
                <input type="text" placeholder="Введите текст" />
                {/* <FormButton label="Отправить" /> */}
            </form>
        </div>
    )
}

export default Main
