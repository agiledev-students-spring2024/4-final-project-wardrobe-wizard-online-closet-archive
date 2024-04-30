import React, { useState, useEffect } from 'react';
import '../styles/All_Items.css'; // Update the path to your All_Items.css
import { Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu'; // Assuming you have a similar overlay menu across pages
import axios from 'axios';

const All_Items = () => {
  const [allItems, setAllItems] = useState([]);
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
          axios.get('http://159.203.82.135:3001/shirts', config),
          axios.get('http://159.203.82.135:3001/pants', config),
          axios.get('http://159.203.82.135:3001/skirts', config),
          axios.get('http://159.203.82.135:3001/jackets', config),
          axios.get('http://159.203.82.135:3001/shoes', config),
          axios.get('http://159.203.82.135:3001/accessories', config),
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


  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="All_Items">
      <OverlayMenu />
      <header className="All_Items-banner">
        <h1>WARDROBE WIZARD</h1>
        <h3>All Items</h3>
      </header>

      {showForm && (
      <div className="All_Items-list">
        {allItems.map((item) => (
          <Link to={`/item-detail/${encodeURIComponent(item.nameItem)}`} key={item.nameItem} className="All_Items-item-link">
            <div className="All_Items-item" key={item.nameItem}>
              <div className="All_Items-image"><img src={`http://localhost:3001${item.imgLink}`} width={200} alt={item.nameItem} /></div>
              <div className="All_Items-info">
                <h3>{item.nameItem}</h3>
                <p>{item.brand}</p>
                <p>{item.type}</p>
              </div>
            </div>
          </Link>
        ))}
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

export default All_Items;
