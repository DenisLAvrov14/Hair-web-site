import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
    return (
        <>
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
            <Outlet />
        </>
    )
}
export { Layout }
