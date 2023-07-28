import React from 'react'
import './Header.css'
import logo from '../../public/logo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/prise">Цены</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Галерея</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq">Вопросы</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
