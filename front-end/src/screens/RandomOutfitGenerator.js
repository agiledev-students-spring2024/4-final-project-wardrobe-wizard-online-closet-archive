import '../styles/RandomOutfitGenerator.css'; 
import OverlayMenu from '../components/OverlayMenu';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomOutfitGenerator = () => {
  const [allItems, setAllItems] = useState({ shirts: [], pants: [], skirts: [], shoes: [], accessories: [], jackets: [] });
  const [generatedOutfit, setGeneratedOutfit] = useState([]);
  const [outfitName, setOutfitName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const categories = ['shirts', 'pants', 'skirts', 'shoes', 'accessories', 'jackets'];
        const responses = await Promise.all(categories.map(category =>
          axios.get(`http://159.203.82.135:3001/${category}`)
        ));
        const itemsByCategory = {};
        responses.forEach((response, index) => {
          itemsByCategory[categories[index]] = response.data;
        });
        setAllItems(itemsByCategory);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const generateRandomOutfit = () => {
    const outfit = {};
    const { shirts, pants, skirts, shoes, accessories, jackets } = allItems;

    outfit.shirts = shirts[Math.floor(Math.random() * shirts.length)];
    outfit.bottoms = Math.random() < 0.5
      ? pants[Math.floor(Math.random() * pants.length)]
      : skirts[Math.floor(Math.random() * skirts.length)];
    outfit.shoes = shoes[Math.floor(Math.random() * shoes.length)];
    outfit.accessories = accessories[Math.floor(Math.random() * accessories.length)];
    if (jackets.length && Math.random() < 0.5) {
      outfit.jackets = jackets[Math.floor(Math.random() * jackets.length)];
    }

    setGeneratedOutfit(Object.values(outfit));
  };

  const handleOutfitNameChange = (e) => {
    setOutfitName(e.target.value);
  };

  const saveOutfit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/random', {
        outfitName,
        items: generatedOutfit,
      });
      // Optionally, reset state or redirect the user
    } catch (error) {
      console.error('Error saving the outfit:', error);
    }
  };

  const cancelOutfit = () => {
    setGeneratedOutfit([]);
    setOutfitName('');
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

      {generatedOutfit.length > 0 && (
        <>
          <div className="outfit-display">
            {generatedOutfit.map((item, index) => (
              <div key={index} className="item-container-random">
  
                <img src={`http://localhost:3001${item.img}`} alt={item.name}className="item-image-random" />
                
                <div className="item-info-random">
                  <p><u>{item.name}</u></p>
                  <p>{item.brand}</p>
                  <p>{item.type}</p>
                </div>
              </div>
            ))}

          </div>
          <div className="outfitname-input">
              <form className='outfitname-save' onSubmit={saveOutfit}>
                    <input 
                    name="outfitname" 
                    type="text"
                    placeholder='Enter Outfit Name'
                    value={outfitName}
                    onChange={handleOutfitNameChange}
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
