import React from 'react';
import '../styles/Login.css';

function Login() {

    return (
        <form className="form">
            <h2>Login</h2>
            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="email">Password</label>
                <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                />
            </div> 
            <button type="submit">Login</button>                
        </form>
    )
    
}

export default Login;
