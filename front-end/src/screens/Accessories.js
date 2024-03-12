import React from 'react';
import '../styles/Accessories.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Accessories = () => {
    // Mock data for Accessories
    const Accessories = [
        { name: 'Casual Accessories', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Accessories', brand: 'Brand B', type: 'Formal' },
        { name: 'Accessories 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Accessories 4', brand: 'Brand D', type: 'New' },
        // ... add more Accessories as needed
    ];

    return(
        <div className="Accessories">
            <OverlayMenu />
            <header className='Accessories-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Accessories</h3>
            </header>
            <div className="Accessories-list">
                {Accessories.map((Accessorie, index) => (
                    <div className="Accessories-item" key={index}>
                        <div className="Accessories-image"></div> {/* Placeholder for the image */}
                        <div className="Accessories-info">
                            <h3>{Accessorie.name}</h3>
                            <p>{Accessorie.brand}</p>
                            <p>{Accessorie.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accessories;