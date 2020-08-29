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
                    {/* <Link to='/dash'> Dash </Link>
              <Link to='/share'> <li>Sharify</li> </Link>    
                 <Link to='/home' > <li>Home Finder</li> </Link>
                   <Link><li>Resume</li> </Link>  */}
                    <button onClick={() => props.setChoice(0)}>Sharify</button>
                    <button onClick={() => props.setChoice(1)}>HomeFinder</button>
                    <button onClick={() => props.setChoice(2)}>Resume</button>
                </ul>
            </aside>
            <aside id='bottomQ'>

            </aside>
        </div>
    )
}

export default withRouter(Nav)