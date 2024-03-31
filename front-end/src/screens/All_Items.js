import React, { useState, useEffect } from 'react';
import '../styles/All_Items.css'; // Update the path to your All_Items.css
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu'; // Assuming you have a similar overlay menu across pages
import axios from 'axios';

const All_Items = () => {
  const [allItems, setAllItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:3001/shirts'),
          axios.get('http://localhost:3001/pants'),
          axios.get('http://localhost:3001/skirts'),
          axios.get('http://localhost:3001/jackets'),
          axios.get('http://localhost:3001/shoes'),
          axios.get('http://localhost:3001/accessories'),
        ]);

        const combinedItems = responses.flatMap(response => response.data);
        setAllItems(combinedItems);
      } catch (e) {
        console.error('Error fetching all items:', e);
        setError(e.message);
      }
    };

    fetchItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="All_Items">
      <OverlayMenu />
      <header className="All_Items-banner">
        <h1>WARDROBE WIZARD</h1>
        <h3>All Items</h3>
      </header>
      <div className="All_Items-list">
        {allItems.map((item) => (
          <Link to={`/item-detail/${encodeURIComponent(item.name)}`} key={item.name} className="All_Items-item-link">
            <div className="All_Items-item" key={item.name}>
              <div className="All_Items-image"><img src={`http://localhost:3001${item.img}`} width={200} alt={item.name} /></div>
              <div className="All_Items-info">
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p>{item.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default All_Items;
