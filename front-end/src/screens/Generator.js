import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import '../styles/Generator.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu';
import Footer from '../components/Footer'; 

const Generator = () => {
  // Dummy data for clothes items
  const clothes = [
    { id: 1, name: 'Item 1', brand: 'Brand A', type: 'Shirt' },
    { id: 2, name: 'Item 2', brand: 'Brand B', type: 'Pants' },
    { id: 3, name: 'Item 3', brand: 'Brand C', type: 'Pants' },
    { id: 4, name: 'Item 4', brand: 'Brand D', type: 'Skirts' },
    { id: 5, name: 'Item 5', brand: 'Brand B', type: 'Skirts' },
    // ... add more items here
  ];

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Toggle selection of an item
  const toggleItemSelection = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  // Handler for generate button click
  const handleGenerateClick = () => {
    console.log("Selected items:", selectedItems); // Replace with your generation logic
  };

  return (
    <div className="generator-container">
      <OverlayMenu />
      <header className="generator-header">
        <h1>WARDROBE WIZARD</h1>
        <h2>Generator</h2>
      </header>
      <h3>Choose the clothes you want to match:</h3>
      <div className="items-container">
        {clothes.map((item) => (
          <div
            key={item.id}
            className={`item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
            onClick={() => toggleItemSelection(item.id)}
          >
            <div className="thumbnail"></div>
            <div className="item-info">
              <p>Name: {item.name}</p>
              <p>Brand: {item.brand}</p>
              <p>Type: {item.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="generate-button" onClick={handleGenerateClick}>
          Generate Outfit
        </button>
        <div className='random'>
          <p><Link to="/random">Have no idea? Try <u>RandomOutfitGenerator</u></Link></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Generator;
