import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Pricelist } from '../../Pricelist/Pricelist'
import Gallery from '../../Gallery/Gallery'
import { Faq } from '../../Faq/Faq'
import { Layout } from '../../../components/Layout/Layout'
import { Home } from '../../Home/Home'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="prise" element={<Pricelist />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="faq" element={<Faq />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
