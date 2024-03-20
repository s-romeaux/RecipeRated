import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/main.css'; // Import the CSS file

function Header() {
    return (
        <header>
            {/* Navbar */}
            <div className="navbar">
                <img src='/images/samich.jpg' alt="Logo" className="logo" />
                <div className="navbar-links">
                    <Link to="/">Home</Link> {/* Link to the home page */}
                    <Link to="/add-recipe">Add Recipe</Link> {/* Link to the Add Recipe form */}
                    <a href="#">Link 3</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
