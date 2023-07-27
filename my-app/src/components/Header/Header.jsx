import React from 'react'
import './Header.css'
import logo from '../../public/logo.png'
import { Layout } from '../Layout/Layout'

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <nav>
                <Layout />
            </nav>
        </header>
    )
}
