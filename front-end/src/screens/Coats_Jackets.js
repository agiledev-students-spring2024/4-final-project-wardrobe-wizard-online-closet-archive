import React from 'react';
import '../styles/Coats_Jackets.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component


const CoatsJackets = () => {
    // Mock data for Coats_Jackets
    const CoatsJackets = [
        { name: 'Casual Coats_Jackets', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Coats_Jackets', brand: 'Brand B', type: 'Formal' },
        { name: 'Coats_Jackets 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Coats_Jackets 4', brand: 'Brand D', type: 'New' },
        // ... add more Coats_Jackets as needed
    ];

    return(
        <div className="Coats_Jackets">
            <OverlayMenu />
            <header className='Coats_Jackets-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Coats/Jackets</h3>
            </header>
            <div className="Coats_Jackets-list">
                {CoatsJackets.map((CoatJacket, index) => (
                    <div className="Coats_Jackets-item" key={index}>
                        <div className="Coats_Jackets-image"></div> {/* Placeholder for the image */}
                        <div className="Coats_Jackets-info">
                            <h3>{CoatJacket.name}</h3>
                            <p>{CoatJacket.brand}</p>
                            <p>{CoatJacket.type}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default CoatsJackets;