import { Outlet } from 'react-router-dom'
import './Layout.css'
import { Header } from '../Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export { Layout }
