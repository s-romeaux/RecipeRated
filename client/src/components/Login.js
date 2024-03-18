import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/main.css'; // Import the CSS file

function Login() {
    return (
        <div className="login-form">
            <h2>User Login</h2><br />
            <form>
                <input type="text" placeholder="Username" /><br /><br />
                <input type="password" placeholder="Password" /><br /><br />
                <button type="submit">Login</button><br /><br /><br /><br />
                <Link to="/signup">
                    <button>Sign Up!</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
