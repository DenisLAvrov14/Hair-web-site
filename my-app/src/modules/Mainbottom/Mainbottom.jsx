import React from 'react'
import { NavLink } from 'react-router-dom'
import './Mainbottom.css'

export const MainBottom = () => {
    return (
        <div className="bottom-container">
            {/* First Block */}
            <div className="block">
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssaaaaaaaaaaaaaaaaaaaaa
                </p>
                <p>First Block Text Line 2</p>
                <NavLink to="/gallery">
                    <button>Go to Gallery</button>
                </NavLink>
            </div>

            {/* Second Block */}
            <div className="block">
                <p>Second Block Text Line 1</p>
                <p>Second Block Text Line 2</p>
                <NavLink to="/faq">
                    <button>Go to FAQ</button>
                </NavLink>
            </div>
        </div>
    )
}

export default MainBottom
