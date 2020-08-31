import React from 'react'
import './Nav.css';
import { Link, withRouter } from 'react-router-dom'

const Nav = (props) => {
    
    return (
        <div id='navbar' >
            <aside id='topQ' >
                <img src={`./assets/bishopPhoto.jpg`} alt='headshot' className='headshot' />
            </aside>
            <aside id='middleQ' >
                <ul>
                    
                    <button onClick={() => props.setChoice(0)}>HomeFinder</button>
                    <button onClick={() => props.setChoice(1)}>Sharify</button>
                    <button onClick={() => props.setChoice(2)}>Resume</button>
                </ul>
            </aside>
            <aside id='bottomQ'>

            </aside>
        </div>
    )
}

export default withRouter(Nav)