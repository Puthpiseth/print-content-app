import React, {useState} from 'react'
import '../styles/Signup.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3000/signup', {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        setRedirect(true);
    }

    // Redirect to login page after registered
    if (redirect) {
        return <Redirect to ="/login"/>;
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="form-inputs">
                <label htmlFor="username">Email</label>
                <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" >Signup</button>     
        </form>
    )
}

export default Signup;