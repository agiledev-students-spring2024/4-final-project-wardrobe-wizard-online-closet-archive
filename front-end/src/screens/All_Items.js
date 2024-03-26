import React from 'react';
import '../styles/All_Items.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component


const AllItems = () => {
    // Mock data for All_Items
    const AllItems = [
        { name: 'Casual All_Items', brand: 'Brand A', type: 'Casual' },
        { name: 'Formal All_Items', brand: 'Brand B', type: 'Formal' },
        { name: 'All_Items 3', brand: 'Brand C', type: 'Fashion' },
        { name: 'All_Items 4', brand: 'Brand D', type: 'New' },
        // ... add more All_Items as needed
    ];

    return(
        <div className="All_Items">
            <OverlayMenu />
            <header className='All_Items-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>All Items</h3>
            </header>
            <div className="All_Items-list">
                {AllItems.map((All_Item, index) => (
                    <div className="All_Items-item" key={index}>
                        <div className="All_Items-image"></div> {/* Placeholder for the image */}
                        <div className="All_Items-info">
                            <h3>{All_Item.name}</h3>
                            <p>{All_Item.brand}</p>
                            <p>{All_Item.type}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default AllItems;