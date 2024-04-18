import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import '../styles/Generator.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu';


const Generator = () => {
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState('');
  const [outfitNotes, setOutfitNotes] = useState('');
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);


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

        const combinedItems = responses.flatMap(response => response.data);
        setAllItems(combinedItems);
      } catch (e) {
        console.error('Error fetching all items:', e);
        setError(e.message);
      }
    };

    fetchItems();
  }, []);

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
  const handleOutfitNotesChange = (e) => {
    setOutfitNotes(e.target.value);
  };
  // Handler for saving the outfit
  const handleSaveOutfit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
      const itemsToSave = allItems.filter(item => selectedItems.includes(item._id));
      await axios.post('http://localhost:3001/generator', {
        outfitName,
        outfitNotes,
        items: itemsToSave,
      },config);
      // Reset the selection and outfit name after saving
      setSelectedItems([]);
      setOutfitName('');
      setOutfitNotes('');
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
      {/* {error && <p className="error-message">{error}</p>} */}
      { showForm && (
      <div>
      <h3>Choose the clothes you want to match:</h3>
      <div className="items-container">
      {allItems.map((item) => (
          <div
          key={item._id}
          className={`item ${selectedItems.includes(item._id) ? 'selected' : ''}`}
          onClick={() => toggleItemSelection(item._id)}
          > 
            <div className="thumbnail">
               <img src={`http://localhost:3001${item.imgLink}`} alt={item.nameItem} className="item-image" />   
            </div>
            <div className="item-info">
              <p><u>{item.nameItem}</u></p>
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
                        <input 
                        name="outfitnotes" 
                        type="text"
                        value={outfitNotes}
                        onChange={handleOutfitNotesChange}
                        placeholder='Leave any notes for this outfit :)'
                        />
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
      </div>
       )}

      {!showForm && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}  
          
     
    </div>
  );
};

export default Generator;
