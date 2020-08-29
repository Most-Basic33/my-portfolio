import React, { useState } from 'react'
import './Nav.css';

const Nav = (props) => {
    return (
        <div id='navbar' >
            <aside id='topQ' >
                <img src={`./assets/bishopPhoto.jpg`} alt='headshot' className='headshot' />
            </aside>
            <aside id='middleQ' >
                <ul>
                    <li>Sharify</li>
                    <li>Home Finder</li>
                    <li>Resume</li>
                </ul>
            </aside>
            <aside id='bottomQ'>

            </aside>
        </div>
    )
}
export default Nav