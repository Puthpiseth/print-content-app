import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';


function Nav() {
    
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <div className="nav-right">
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/signup'}>Sign up</Link></li>
                </div>
            </ul> 
        </nav>   
    )
}

export default Nav;
