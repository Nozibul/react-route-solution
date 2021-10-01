import React from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {fontWeight:"bold",color:"blue"}
    return (
        <nav className="header">
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>

            <NavLink activeStyle={activeStyle} to="/about/culture">Culture</NavLink>

            <NavLink activeStyle={activeStyle} to="/post">Post</NavLink>

        </nav>
    );
};

export default Header;