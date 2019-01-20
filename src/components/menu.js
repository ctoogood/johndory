import React from 'react'
import { Link } from 'gatsby'


const Menu = ( ) => (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>

)

export default Menu