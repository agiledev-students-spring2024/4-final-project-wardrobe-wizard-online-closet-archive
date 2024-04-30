import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/Archive.css'; // Path to your CSS file
import axios from 'axios';

const Archive = () => {
  const [outfits, setOutfits] = useState([]);
  const [loginWarning, setLoginWarning] = useState(false);

  useEffect(() => {
    const fetchOutfits = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://159.203.82.135:3001/outfits', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOutfits(response.data); // Assume response.data is the array of outfits with image links
      } catch (error) {
        console.error('Error fetching outfits:', error);
        setLoginWarning(true);
      }
    };

    fetchOutfits();
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
              {outfit.imageLinks.map((imgLink) => ( // Removed itemIndex, key will be provided by the Link component
                <Link to={`/outfit-detail/${encodeURIComponent(outfit.outfitName)}`} key={imgLink} className="Archive-item-link">
                  <div className="Archive-image-container">
                    <img src={`http://localhost:3001${imgLink}`} alt={outfit.outfitName} className="Archive-image"/>
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
      {loginWarning && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}   

    </div>
  );
};

export default Archive;
