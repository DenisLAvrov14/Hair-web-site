import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '../../../components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Prise } from '../../Prise/Prise'
import { Gallery } from '../../Gallery/Gallery'
import { Faq } from '../../Faq/Faq'
import { Main } from '../../Main/Main'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="/prise" element={<Prise />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
