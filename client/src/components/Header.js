import React from 'react';
import '../styles/main.css'; // Import the CSS file

function Header() {
    return (
        <header>
            {/* Navbar */}
            <div className="navbar">
                <img src='/images/samich.jpg' alt="Logo" className="logo" />
                <div className="navbar-links">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
