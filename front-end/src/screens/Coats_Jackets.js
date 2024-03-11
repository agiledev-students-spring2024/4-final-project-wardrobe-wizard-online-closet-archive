import React from 'react';
import '../styles/Coats_Jackets.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Coats_Jackets = () => {
    // Mock data for Coats_Jackets
    const Coats_Jackets = [
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
                <h1>Coats/Jackets</h1>
            </header>
            <div className="Coats_Jackets-list">
                {Coats_Jackets.map((Coat_Jacket, index) => (
                    <div className="Coats_Jackets-item" key={index}>
                        <div className="Coats_Jackets-image"></div> {/* Placeholder for the image */}
                        <div className="Coats_Jackets-info">
                            <h3>{Coat_Jacket.name}</h3>
                            <p>{Coat_Jacket.brand}</p>
                            <p>{Coat_Jacket.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Coats_Jackets;