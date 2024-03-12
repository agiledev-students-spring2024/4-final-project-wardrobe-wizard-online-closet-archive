import React from 'react';
import '../styles/Pants.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Pants = () => {
    // Mock data for Pants
    const Pants = [
        { name: 'Casual Pants', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Pants', brand: 'Brand B', type: 'Formal' },
        { name: 'Pants 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Pants 4', brand: 'Brand D', type: 'New' },
        // ... add more Pants as needed
    ];

    return(
        <div className="Pants">
            <OverlayMenu />
            <header className='Pants-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Pants</h3>
            </header>
            <div className="Pants-list">
                {Pants.map((Pant, index) => (
                    <div className="Pants-item" key={index}>
                        <div className="Pants-image"></div> {/* Placeholder for the image */}
                        <div className="Pants-info">
                            <h3>{Pant.name}</h3>
                            <p>{Pant.brand}</p>
                            <p>{Pant.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pants;