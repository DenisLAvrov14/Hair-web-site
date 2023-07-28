import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Prise } from '../../Prise/Prise'
import { Gallery } from '../../Gallery/Gallery'
import { Faq } from '../../Faq/Faq'
import { Main } from '../../Main/Main'
import { Layout } from '../../../components/Layout/Layout'
import { MainBottom } from '../../Mainbottom/Mainbottom'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="prise" element={<Prise />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="faq" element={<Faq />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
