import React from 'react'
import './Prise1.css'

export const Prise1 = () => {
    return (
        <div className="prise1-container">
            <h2>Список цен за фоликулы:</h2>
            <ul>
                <li>Цена 1: $100</li>
                <li>Цена 2: $200</li>
                <li>Цена 3: $300</li>
                {/* Добавьте здесь остальные цены */}
            </ul>
        </div>
    )
}

export default Prise1
