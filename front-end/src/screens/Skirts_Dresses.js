import React from 'react';
import '../styles/Skirts_Dresses.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const SkirtsDresses = () => {
    // Mock data for Skirts_Dresses
    const SkirtsDresses = [
        { name: 'Casual Skirts_Dresses', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Skirts_Dresses', brand: 'Brand B', type: 'Formal' },
        { name: 'Skirts_Dresses 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Skirts_Dresses 4', brand: 'Brand D', type: 'New' },
        // ... add more Skirts_Dresses as needed
    ];

    return(
        <div className="Skirts_Dresses">
            <OverlayMenu />
            <header className='Skirts_Dresses-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Skirts/Dresses</h3>
            </header>
            <div className="Skirts_Dresses-list">
                {SkirtsDresses.map((SkirtDresse, index) => (
                    <div className="Skirts_Dresses-item" key={index}>
                        <div className="Skirts_Dresses-image"></div> {/* Placeholder for the image */}
                        <div className="Skirts_Dresses-info">
                            <h3>{SkirtDresse.name}</h3>
                            <p>{SkirtDresse.brand}</p>
                            <p>{SkirtDresse.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkirtsDresses;