import React from 'react';
import { useParams } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/ItemDetail.css';

const ItemDetail = () => {
  let { id } = useParams(); // Use 'id' or 'itemName' based on your URL configuration
  // Fetch or import your item data here
  const item = {
    id,
    name: 'Example Item',
    brand: 'Brand A',
    type: 'Example Type',
    color: 'Example Color',
    notes: 'Some notes about the item',
    imageUrl: '/path/to/your/image.jpg' // This should be the path to the image file
  };

  return (
    <div className="item-detail">
      <OverlayMenu />
      <header className='ItemDetail-banner'>
        <h1>WARDROBE WIZARD</h1>
        <h3>Item Details</h3>
      </header>
      <div className="ItemDetail-info">
        {item.imageUrl && (
          <div className="ItemDetail-image" style={{ backgroundImage: `url(${item.imageUrl})` }}>
            {/* If no image is available, this div will show the placeholder */}
          </div>
        )}
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
