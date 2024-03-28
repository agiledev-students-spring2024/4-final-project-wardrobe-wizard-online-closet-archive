import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/ItemDetail.css';

const ItemDetail = () => {
  const { itemName } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const encodedItemName = encodeURIComponent(itemName);
    // Assuming your backend is running on the same machine and port 3001
    fetch(`http://localhost:3001/item-detail/${encodedItemName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setItem(data); // Set the item state to the data received from backend
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching item details:', error);
        setError(error.toString());
        setLoading(false);
      });
  }, [itemName]); // Dependency array to refetch if the itemName changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>No item found</div>;
  }

  // The image path should not include '/public' because that's where your static server serves files from
  const imagePath = item.img.replace('/public', '');

  return (
    <div className="item-detail">
      <OverlayMenu />
      <header className='ItemDetail-banner'>
        <h1>WARDROBE WIZARD</h1>
        <h3>Item Details</h3>
      </header>
      <div className="ItemDetail-container">
        <div className="ItemDetail-image"><img src = { `http://localhost:3001${item.img}`} width={300} /></div> {/* Placeholder for the image */}
        <div className="ItemDetail-info">
          <h3>{item.name}</h3>
          <p>Brand: {item.brand}</p>
          <p>Type: {item.type}</p>
          <p>Color: {item.color}</p>
          <p>Notes: {item.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
