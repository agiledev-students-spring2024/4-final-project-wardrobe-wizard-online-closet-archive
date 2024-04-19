import '../styles/RandomOutfitGenerator.css'; 
import OverlayMenu from '../components/OverlayMenu';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomOutfitGenerator = () => {
  const [allItems, setAllItems] = useState({ shirts: [], pants: [], skirts: [], shoes: [], accessories: [], jackets: [] });
  const [generatedOutfit, setGeneratedOutfit] = useState([]);
  const [outfitName, setOutfitName] = useState('');
  const [outfitNotes, setOutfitNotes] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() =>{
    const token = localStorage.getItem('token');
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
    axios.get('http://localhost:3001/verify_login', config)
    .then( res => {
       setShowForm(res.data.loggedIn)
    })
    .catch((e) => {
        console.log(e)
    })
  }, []);
 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const responses = await Promise.all([
          axios.get('http://localhost:3001/shirts', config),
          axios.get('http://localhost:3001/pants', config),
          axios.get('http://localhost:3001/skirts', config),
          axios.get('http://localhost:3001/jackets', config),
          axios.get('http://localhost:3001/shoes', config),
          axios.get('http://localhost:3001/accessories', config),
        ]);
        const categorizedItems = {
          shirts: responses[0].data,
          pants: responses[1].data,
          skirts: responses[2].data,
          jackets: responses[3].data,
          shoes: responses[4].data,
          accessories: responses[5].data,
        };
  
        setAllItems(categorizedItems);

      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const generateRandomOutfit = () => {
    const outfit = {};
    const { shirts, pants, skirts, shoes, accessories, jackets } = allItems;

    if (shirts.length > 0) {
        outfit.shirts = shirts[Math.floor(Math.random() * shirts.length)];
    }
    if (pants.length > 0 && skirts.length > 0) {
        outfit.bottoms = Math.random() < 0.5
            ? pants[Math.floor(Math.random() * pants.length)]
            : skirts[Math.floor(Math.random() * skirts.length)];
    } else if (pants.length > 0) {
        outfit.bottoms = pants[Math.floor(Math.random() * pants.length)];
    } else if (skirts.length > 0) {
        outfit.bottoms = skirts[Math.floor(Math.random() * skirts.length)];
    }
    if (jackets.length > 0 && Math.random() < 0.5) {
      outfit.jackets = jackets[Math.floor(Math.random() * jackets.length)];
    }
    if (shoes.length > 0) {
        outfit.shoes = shoes[Math.floor(Math.random() * shoes.length)];
    }
    if (accessories.length > 0) {
        outfit.accessories = accessories[Math.floor(Math.random() * accessories.length)];
    }
    
    const nonEmptyItems = Object.values(outfit).filter(item => item !== undefined);
    setGeneratedOutfit(nonEmptyItems);
  };

  const handleOutfitNameChange = (e) => {
    setOutfitName(e.target.value);
  };

  const handleOutfitNotesChange = (e) => {
    setOutfitNotes(e.target.value);
  };

  const saveOutfit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
      await axios.post('http://localhost:3001/random', {
        outfitName,
        outfitNotes,
        items: generatedOutfit,
      },config);
      
    } catch (error) {
      console.error('Error saving the outfit:', error);
    }
  };

  const cancelOutfit = () => {
    setGeneratedOutfit([]);
    setOutfitName('');
    setOutfitNotes('');
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
            {generatedOutfit.map((item) => (
              <div key={item._id} className="item-container-random">
  
                <img src={`http://localhost:3001${item.imgLink}`} alt={item.nameItem}className="item-image-random" />
                
                <div className="item-info-random">
                  <p><u>{item.nameItem}</u></p>
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
                    <input 
                    name="outfitnotes" 
                    type="text"
                    value={outfitNotes}
                    onChange={handleOutfitNotesChange}
                    placeholder='Leave any notes for this outfit :)'
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
