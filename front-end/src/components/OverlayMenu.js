import React, { useState } from 'react';
import './OverlayMenu.css';
import { Link } from 'react-router-dom';
const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

    // Function to toggle the menu's open state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    /*
        on logout the token is removed so that when the user visits the link again they will need to login
    */
    const handleLogout = () => {
        localStorage.removeItem('token');
    }
    return (
        <>
            <button onClick={toggleMenu} className={`menu-button ${isOpen ? 'open' : ''}`}>☰</button> {/* Menu open button */}
            <div className={`overlay-menu ${isOpen ? 'open' : ''}`}>
                <button onClick={toggleMenu} className="close-menu">✕</button> {/* Close button */}
                <h2>Wardrobe Wizard</h2>
                <nav>
                    <ul>
                        {/* <li><a href="/home">Home</a></li>
                        <li><a href="/view-closet">View Closet</a></li>
                        <li><a href="/add-item">Add Item</a></li>
                        <li><a href="/outfit-archive">Outfit Archive</a></li>
                        <li><a href="/generator">Generator</a></li>
                        <li><a href="/">Logout</a></li> */}
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/closet">View Closet</Link></li>
                        <li><Link to="/additem">Add Item</Link></li>
                        <li><Link to="/Archive">Outfit Archive</Link></li>
                        <li><Link to="/generator">Generator</Link></li>
                        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default OverlayMenu;
