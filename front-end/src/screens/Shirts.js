import React from 'react';
import '../styles/Shirts.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Shirt = () => {
    // Mock data for shirts
    const shirts = [
        { name: 'Casual Shirt', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Shirt', brand: 'Brand B', type: 'Formal' },
        { name: 'Shirt 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Shirt 4', brand: 'Brand D', type: 'New' },
        // ... add more shirts as needed
    ];

    return(
        <div className="Shirt">
            <OverlayMenu />
            <header className='Shirt-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Shirts</h3>
            </header>
            <div className="Shirt-list">
                {shirts.map((shirt, index) => (
                    <Link to={`/item-detail/${shirt.name}`} key={index} className="Shirt-item-link">
                    <div className="Shirt-item">
                        <div className="Shirt-image"></div> {/* Placeholder for the image */}
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
