import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div itemscope itemtype="https://schema.org/Organization">
                <span itemprop="name">
                    Название вашей организации: Мерсин Мед в России, клиника д.
                    Murat Mantı в Турции
                </span>
                <p>Контактная информация:</p>

                <div
                    itemprop="address"
                    itemscope
                    itemtype="https://schema.org/PostalAddress"
                >
                    <p>
                        Адрес:{' '}
                        <span itemprop="streetAddress">
                            ул. 1928, Глобальный бизнес-центр Экинчи, стр. № 5,
                            этаж 4
                        </span>
                        ,
                        <span itemprop="addressLocality">
                            {' '}
                            Ёнишехир/Мерсин, Турция,
                        </span>
                        <span itemprop="postalCode"> 33140</span>
                    </p>
                </div>

                <p>
                    Телефон:{' '}
                    <span itemprop="telephone">
                        <a href="tel:+79213310212">+7-921-331-02-12</a>
                    </span>
                </p>
                <p>
                    E-mail:{' '}
                    <span itemprop="email">
                        <a href="mailto:denislavrov14@gmail.com">
                            denislavrov14@gmail.com
                        </a>
                    </span>
                </p>
                <p className="lastp">Часы работы: Пн-Пт 10:00-19:00</p>
            </div>
        </footer>
    )
}

export default Footer
