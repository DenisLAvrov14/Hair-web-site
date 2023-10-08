import React from 'react'
import './PriceInfo.css'

export const PriceInfo = () => {
    return (
        <div className="prise-booking">
            <div className="prise-booking-wrap">
                <h2>Аренда номеров в гостиницах Мерсина</h2>
                <p className="booking">
                    Мерсин располагает широким выбором гостиниц и отелей,
                    перейдя по ссылке{' '}
                    <a
                        href="https://www.agoda.com/tr-tr/search?poi=163032&site_id=1891437&tag=0d9ff95e-64cc-6741-05ce-6a15bb054511&nhakw=1&gad=1&gbraid=0AAAAAD-GdVnbCgQkwV6aSv3iHZweqSSMY&device=m&network=g&adid=577301125873&rand=5623309049445501940&expid=&adpos=&aud=kwd-770880718245&gclid=CjwKCAjw6eWnBhAKEiwADpnw9pU1Kx4WsvqxT06Osu5M_Ctf4kvD7NNdWy_CYVfQyEuj5ooaaSt5choCXk8QAvD_BwE&pslc=1"
                        target="_blank" // Этот атрибут откроет ссылку в новой вкладке
                        rel="noopener noreferrer" // Рекомендуется использовать для безопасности
                    >
                        здесь
                    </a>
                    , вы можете забронировать себе понравившийся номер сами, или
                    поручите это нам!
                </p>
            </div>
        </div>
    )
}

export default PriceInfo
