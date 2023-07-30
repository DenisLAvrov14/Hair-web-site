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

const sources = [im1, im2, im3, im4, im5, im6, im7, im8, im9]

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
                <Image src={source} onClick={handleClick} className="opened" />
            ) : (
                sources.map((source) => {
                    return (
                        <Image
                            key={source.toString()}
                            src={source}
                            onClick={handleClick}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Gallery
