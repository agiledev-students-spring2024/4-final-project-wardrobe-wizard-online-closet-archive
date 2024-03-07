import React, { useState } from 'react';
import './OverlayMenu.css';

const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

    // Function to toggle the menu's open state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleMenu} className="menu-button">☰</button> {/* Menu open button */}
            <div className={`overlay-menu ${isOpen ? 'open' : ''}`}>
                <button onClick={toggleMenu} className="close-menu">✕</button> {/* Close button */}
                <h2>Wardrobe Wizard</h2>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/view-closet">View Closet</a></li>
                        <li><a href="/add-item">Add Item</a></li>
                        <li><a href="/outfit-archive">Outfit Archive</a></li>
                        <li><a href="/generator">Generator</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default OverlayMenu;
