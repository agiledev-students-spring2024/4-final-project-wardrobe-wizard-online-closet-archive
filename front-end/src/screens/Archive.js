import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/Archive.css'; // Path to your CSS file

const Archive = () => {
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    // Fetch the outfits from your server
    fetch('http://localhost:3001/outfits')
      .then(response => response.json())
      .then(data => setOutfits(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="Archive">
      <OverlayMenu />
      <header className='Archive-banner'>
        <h1>WARDROBE WIZARD</h1>
        <h3>Outfit Archive</h3>
      </header>
      <div className="Archive-list">
        {outfits.map((outfit) => ( // Removed index, using outfitName as key
          <div key={outfit.outfitName} className="Archive-item">
            <div className="Archive-images">
              {outfit.items.map((item) => ( // Removed itemIndex, key will be provided by the Link component
                <Link to={`/outfit-detail/${encodeURIComponent(outfit.outfitName)}`} key={item.name} className="Archive-item-link">
                  <div className="Archive-image-container">
                    <img src={`http://localhost:3001${item.img}`} alt={item.name} className="Archive-image"/>
                  </div>
                </Link>
              ))}
            </div>
            <div className="Archive-info">
              <h3>{outfit.outfitName}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
