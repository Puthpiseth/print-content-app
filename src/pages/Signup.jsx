import React from 'react'
import '../styles/Signup.css';

function Signup() {

    return (
        <form className="form">
            <h2>Sign up</h2>
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
                <label htmlFor="username">Email</label>
                <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="email">Password</label>
                <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                required
                />
            </div>
            <button type="submit" >Signup</button>     
        </form>
    )
}

export default Signup;