import React from 'react'
import './PriceWay.css'

export const PriceWay = () => {
    return (
        <div className="prise-transfer">
            <div className="prise-transfer-wrap">
                <h2 className="transfer">
                    Наши предложения по трансферам внутри города и услуги
                    переводчика:
                </h2>
                <p>
                    В одну сторону из или в аэропорт 90 км:
                    <br />
                    VİP - 120$
                    <br />
                    Эконом - 90$
                    <br />
                    По городу одна поездка:
                    <br />
                    VIP - от 50$
                    <br />
                    Эконом - от 30$
                    <br />
                    Сопровождающий Гид переводчик - 100$ в день
                </p>
                <p>
                    {' '}
                    У нас также есть возможность забронировать вам рейс в обще
                    стороны. Цены варьируются от времени года и даты. Точнее
                    информацию можно узнать при звонке менеджера.
                </p>
            </div>
        </div>
    )
}

export default PriceWay
