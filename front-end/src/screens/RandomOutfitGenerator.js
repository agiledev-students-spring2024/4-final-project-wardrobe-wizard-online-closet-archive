import React, { useState } from 'react';
import '../styles/RandomOutfitGenerator.css'; // Your CSS file for styling
import OverlayMenu from '../components/OverlayMenu';


const RandomOutfitGenerator = () => {
  const [outfit, setOutfit] = useState(null);

  const clothes = [
    { id: 1, name: 'Item 1', brand: 'Brand A', type: 'Shirt' },
    { id: 2, name: 'Item 2', brand: 'Brand B', type: 'Pants' },
    { id: 3, name: 'Item 3', brand: 'Brand C', type: 'Pants' },
    { id: 4, name: 'Item 4', brand: 'Brand D', type: 'Skirts' },
    { id: 5, name: 'Item 5', brand: 'Brand B', type: 'Skirts' },
    // ... add more items here
  ];

  const generateRandomOutfit = () => {
    // Assuming you want to randomly select one item of each type
    const types = ['Shirt', 'Pants', 'Skirts'];
    let randomOutfit = {};
  
    types.forEach(type => {
      // Filter items by type
      let itemsOfType = clothes.filter(item => item.type === type);
      // Pick a random item of this type
      let randomItem = itemsOfType[Math.floor(Math.random() * itemsOfType.length)];
      // Add to the outfit
      randomOutfit[type] = randomItem;
    });
  
    setOutfit(randomOutfit);
  };
  

  const saveOutfit = () => {
    // Implement save logic
    console.log('Outfit saved:', outfit);
  };

  const cancelOutfit = () => {
    setOutfit(null);
  };

  return (
    <div className="random-outfit-generator-container">
      <OverlayMenu />
      <header className="randomgenerator-header">
        <h1>WARDROBE WIZARD</h1>
        <h2> Random Generator</h2>
      </header>

      <div className="auto-generate-button-container">
       <button className="auto-generate-button" onClick={generateRandomOutfit}>Auto Generate Outfit</button>
      </div>

      {outfit && (
        <>
          <div className="outfit-display">
          {outfit && Object.entries(outfit).map(([key, value]) => (
            <div key={key} className="item-container">
              <div className="thumbnail">{/* Optional: Insert an image if available */}</div>
              <div className="item-info">
                <p>{key}: {value.name}</p>
                <p>Brand: {value.brand}</p>
                <p>Type: {value.type}</p>
              </div>
            </div>
          ))}
          </div>
          <div className="outfitname-input">
              <form className='outfitname-save' onSubmit={saveOutfit}>
                    <input name="outfitname" 
                      type="text"
                      placeholder='Enter Outfit Name'
                      required
                       />
              </form>
          </div>
          <div className="save-button-container">
            <button className="save-button" onClick={saveOutfit}>Save Outfit</button>
            <button className="cancel-button" onClick={cancelOutfit}>Cancel</button>
          </div>
        </>
      )}
      
    </div>
  );
};

export default RandomOutfitGenerator;
