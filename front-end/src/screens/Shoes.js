import React from 'react';
import '../styles/Shoes.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component

const Shoes = () => {
    // Mock data for Shoes
    const Shoes = [
        { name: 'Casual Shoes', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal Shoes', brand: 'Brand B', type: 'Formal' },
        { name: 'Shoes 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'Shoes 4', brand: 'Brand D', type: 'New' },
        // ... add more Shoes as needed
    ];

    return(
        <div className="Shoes">
            <OverlayMenu />
            <header className='Shoes-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h1>Shoes</h1>
            </header>
            <div className="Shoes-list">
                {Shoes.map((Shoe, index) => (
                    <div className="Shoes-item" key={index}>
                        <div className="Shoes-image"></div> {/* Placeholder for the image */}
                        <div className="Shoes-info">
                            <h3>{Shoe.name}</h3>
                            <p>{Shoe.brand}</p>
                            <p>{Shoe.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shoes;