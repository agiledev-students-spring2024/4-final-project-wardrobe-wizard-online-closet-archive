import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import '../styles/Generator.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu';
import Footer from '../components/Footer'; 

const Generator = () => {
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Fetch all items from each category
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
  

  // Toggle selection of an item
  const toggleItemSelection = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  // Handler for outfit name change
  const handleOutfitNameChange = (e) => {
    setOutfitName(e.target.value);
  };

  // Handler for saving the outfit
  const handleSaveOutfit = async (e) => {
    e.preventDefault();
    try {
      const itemsToSave = allItems.filter(item => selectedItems.includes(item.id));
      await axios.post('http://localhost:3001/generator', {
        outfitName,
        items: itemsToSave,
      });
      // Reset the selection and outfit name after saving
      setSelectedItems([]);
      setOutfitName('');
    } catch (e) {
      console.error('Error saving the outfit:', e);
      setError(e.message);
    }
  };
  return (
    <div className="generator-container">
      <OverlayMenu />
      <header className="generator-header">
        <h1>WARDROBE WIZARD</h1>
        <h2>Generator</h2>
      </header>
      {error && <p className="error-message">{error}</p>}
      <h3>Choose the clothes you want to match:</h3>
      <div className="items-container">
      {allItems.map((item) => (
          <div
          key={item.id}
          className={`item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
          onClick={() => toggleItemSelection(item.id)}
          >
            
            <div className="thumbnail">
               <img src={`http://localhost:3001${item.img}`} alt={item.name} className="item-image" />   
            </div>
            <div className="item-info">
              <p>{item.name}</p>
              <p>{item.brand}</p>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="outfitname-input">
              <form className='outfitname-save' onSubmit={handleSaveOutfit}>
                    <input 
                      name="outfitname" 
                      type="text"
                      value={outfitName}
                      onChange={handleOutfitNameChange}
                      placeholder='Enter Outfit Name'
                      required />
              </form>
      </div>
      <div className="button-container">
        <button className="generate-button" onClick={handleSaveOutfit}>
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
