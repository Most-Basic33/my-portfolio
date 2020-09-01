import React from 'react'
import './Nav.css';
import { Link, withRouter } from 'react-router-dom'
import bishop from './bishopPhoto.jpg'
const Nav = (props) => {
    
    return (
        <div id='navbar' >
            <aside id='topQ' >
                <img src={bishop} alt='headshot' className='headshot' />
            </aside>
            <aside id='middleQ' >
                <ul  >
                    
                  <button className='navbutt' onClick={() =>props.setChoice(0)} >About Me</button>
                    <button className='navbutt'  onClick={() => props.setChoice(2)}>Resume</button>
                    <button className='navbutt' onClick={() => props.setChoice(3)}>HomeFinder</button>
                    <button className='navbutt'  onClick={() => props.setChoice(1)}>Sharify</button>
                </ul>
            </aside>
            <aside id='bottomQ'>

            </aside>
        </div>
    )
}

export default withRouter(Nav)