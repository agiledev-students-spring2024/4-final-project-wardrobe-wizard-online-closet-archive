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
        {outfits.map((outfit, index) => (
          <div key={index} className="Archive-item">
            <div className="Archive-images">
              {outfit.items.map((item, itemIndex) => (
                <div key={itemIndex} className="Archive-image-container">
                  <img src={`http://localhost:3001${item.img}`} alt={item.name} className="Archive-image"/>
                </div>
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
