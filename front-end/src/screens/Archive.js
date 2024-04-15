import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/Archive.css'; // Path to your CSS file
import axios from 'axios';

const Archive = () => {
  const [outfits, setOutfits] = useState([]);
  const [loginWarning, setLoginWarning] = useState(false);

  useEffect(() => {
    // Fetch the outfits from your server
    const token = localStorage.getItem('token');
      const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
      };
    // fetch('http://localhost:3001/outfits', config)
    //   .then(response => response.json())
    //   .then(data => setOutfits(data))
    //   .catch(error => {
    //     console.log(error);
    //     setLoginWarning(true);
    //   }        
    //     );
    axios.get('http://localhost:3001/outfits', config)
        .then( res => {
            setOutfits(res.data)
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
        })
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
      {loginWarning && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}   

    </div>
  );
};

export default Archive;
