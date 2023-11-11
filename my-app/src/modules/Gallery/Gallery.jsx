import React, { useState } from 'react'
import './Gallery.css'
import Image from '../../components/Image/Image'
import im1 from '../../public/Images/Image (1).png'
import im2 from '../../public/Images/Image (2).png'
import im3 from '../../public/Images/Image (3).png'
import im4 from '../../public/Images/Image (4).png'
import im5 from '../../public/Images/Image (5).png'
import im6 from '../../public/Images/Image (6).png'
import im7 from '../../public/Images/Image (7).png'
import im8 from '../../public/Images/Image (8).png'
import im9 from '../../public/Images/Image (9).png'
import im10 from '../../public/Images/Image (10).png'
import im11 from '../../public/Images/Image (11).png'
import im12 from '../../public/Images/Image (12).png'
import im13 from '../../public/Images/Image (13).png'
import im14 from '../../public/Images/Image (14).png'
import im15 from '../../public/Images/Image (15).png'
import im16 from '../../public/Images/Image (16).png'
import im17 from '../../public/Images/Image (17).png'
import im18 from '../../public/Images/Image (18).png'
import im19 from '../../public/Images/Image (19).png'

const sources = [
    im1,
    im2,
    im3,
    im4,
    im5,
    im6,
    im7,
    im8,
    im9,
    im10,
    im11,
    im12,
    im13,
    im14,
    im15,
    im16,
    im17,
    im18,
    im19,
]

export function Gallery() {
    const [open, setOpen] = useState(false)
    const [source, setSource] = useState(null)

    const handleClick = (e) => {
        setSource(e.currentTarget.getAttribute('src'))
        setOpen((prevOpen) => !prevOpen)
    }

    return (
        <div className="Gallery">
            {open ? (
                <Image
                    src={source}
                    onClick={handleClick}
                    className=" example-opened"
                    alt="Помидор"
                    title={`Tomato ${sources.indexOf(source) + 1}`}
                />
            ) : (
                sources.map((source, index) => {
                    return (
                        <Image
                            key={source.toString()}
                            src={source}
                            onClick={handleClick}
                            alt="Результат пересадки волос"
                            title={`Пересадка волос до и после фото ${
                                index + 1
                            }`}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Gallery
