import React from 'react';
import '../styles/Nav.css';

function Nav() {
    
    return (
        <nav>
            <ul>
                <li>Home</li>
                <div className="nav-right">
                    <li>Login</li>
                    <li>Sign up</li>
                </div>
            </ul> 
        </nav>   
    )
}

export default Nav;
