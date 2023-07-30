import React from 'react'

export default function Image(props) {
    return (
        <img
            src={props.src}
            onClick={props.onClick}
            className={props.className}
            alt=""
        />
    )
}
