import React, { useState } from 'react'
import './Faq.css'

const Question = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAnswer = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <div
            className={`faq-question ${isOpen ? 'opened' : ''}`}
            onClick={toggleAnswer}
        >
            <h3>{question}</h3>
            {isOpen && <p>{answer}</p>}
        </div>
    )
}

export const Faq = () => {
    return (
        <div className="faq-container">
            <Question
                question="Какой вопрос №1?"
                answer="Это ответ на вопрос №1."
            />
            <Question
                question="Какой вопрос №2?"
                answer="Это ответ на вопрос №2."
            />
            {/* Добавьте другие вопросы и ответы */}
        </div>
    )
}

export default Faq
