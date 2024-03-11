import React from 'react';
import '../styles/Shirts.css'; // Make sure this path is correct
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
                <h1>Shirts</h1>
            </header>
            <div className="Shirt-list">
                {shirts.map((shirt, index) => (
                    <div className="Shirt-item" key={index}>
                        <div className="Shirt-image"></div> {/* Placeholder for the image */}
                        <div className="Shirt-info">
                            <h3>{shirt.name}</h3>
                            <p>{shirt.brand}</p>
                            <p>{shirt.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shirt;
