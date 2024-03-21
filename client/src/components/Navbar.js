import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background: #1A3240;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;

const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const LoginPopup = styled.div`
    position: absolute;
    top: 0; /* Position it at the top */
    right: 0; /* Position it at the right */
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 999;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #1A3240;
    color: #F1F2CC;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

function Navbar() {
    const [isLoginOpen, setLoginOpen] = useState(false);

    const toggleLogin = () => {
        setLoginOpen(!isLoginOpen);
    };

    return (
        <Nav>
            <img src='/images/samich.jpg' alt="Logo" className="logo" />
            <Bars />
            <NavMenu>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/add-recipe">Add Recipe</NavLink>
                <NavLink onClick={toggleLogin}>Login</NavLink>
            </NavMenu>
            <LoginPopup isOpen={isLoginOpen}>
                <form>
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit">Sign In</Button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </LoginPopup>
        </Nav>
    );
}

export default Navbar;
