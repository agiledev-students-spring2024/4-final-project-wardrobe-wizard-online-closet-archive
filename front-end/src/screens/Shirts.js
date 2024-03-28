import React, { useState, useEffect } from 'react';
import '../styles/Shirts.css';
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';

const Shirt = () => {
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/shirts')
            .then(response => response.json())
            .then(data => {
                setShirts(data);
            })
            .catch(error => {
                console.error('Error fetching shirts:', error);
            });
    }, []);

    return (
        <div className="Shirt">
            <OverlayMenu />
            <header className='Shirt-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Shirts</h3>
            </header>
            <div className="Shirt-list">
                {shirts.map((shirt) => (
                    <Link to={`/item-detail/${encodeURIComponent(shirt.name)}`} key={shirt.name} className="Shirt-item-link">
                        <div className="Shirt-item">
                            <div className="Shirt-image" style={{ backgroundImage: `url(${shirt.img})` }}></div>
                            <div className="Shirt-info">
                                <h3>{shirt.name}</h3>
                                <p>{shirt.brand}</p>
                                <p>{shirt.type}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Shirt;
