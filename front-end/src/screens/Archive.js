import React from 'react';
import '../styles/Archive.css'

import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Outfits = () => {
    // Mock data for Pants
    const Outfits = [
        { name: 'Casual Pants', brand: 'Brand A', type: 'Casual' },
        { name: 'Shirt', brand: 'Brand B', type: 'Formal' },
        { name: 'Shoes', brand: 'Brand C', type: 'Fashion' },
        { name: 'Hat', brand: 'Brand D', type: 'New' },
        // ... add more items and stuff as needed
    ];

    return(
        <div className="Outfits">
            <OverlayMenu />
            <header className='Archive-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Outfit Archive</h3>
            </header>
            <div className="Outfit Archive">
                {Outfits.map((item, index) => (
                    <div className="Archive-item" key={index}>
                        <div className="Archive-image"></div> {/* Placeholder for the image */}
                        <div className="Archive-info">
                            <h3>{item.name}</h3>
                            <p>{item.brand}</p>
                            <p>{item.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Outfits;