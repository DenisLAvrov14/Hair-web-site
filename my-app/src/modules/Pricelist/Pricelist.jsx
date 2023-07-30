import { Price } from '../Price/Price'
import { PriceInfo } from '../Price/PriceInfo'
import { PriceWay } from '../Price/PriceWay'

export const Pricelist = () => {
    return (
        <div>
            <Price />
            <PriceInfo />
            <PriceWay />
        </div>
    )
}

export default Pricelist
