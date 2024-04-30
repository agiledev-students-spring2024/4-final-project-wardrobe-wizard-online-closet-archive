import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Closet.css'; // Ensure the CSS file is properly linked
import OverlayMenu from '../components/OverlayMenu'; 
import Footer from '../components/Footer'; 
import axios from 'axios';
import { Link } from 'react-router-dom'; // Add this import

const Closet = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  useEffect(() =>{
      const token = localStorage.getItem('token');
      const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
      };
      axios.get('http://159.203.82.135:3001/verify_login', config)
      .then( res => {
         setShowForm(res.data.loggedIn)
      })
      .catch((e) => {
          console.log(e)
      })
  }, []);

  // const handleAddItem = () => {
  //   navigate('/additem'); 
  // };
  const categories = [
    'Shirts',
    'Pants',
    'Skirts/Dresses',
    'Coats/Jackets',
    'Shoes',
    'Accessories',
    'View All',
    'Add Items',
  ];

  // Handle category click
  const handleCategoryClick = (category) => {
    const categoryPaths = {
      'Shirts': '/shirt',
      'Pants': '/pants',
      'Skirts/Dresses':'/skirts-dresses',
      'Coats/Jackets':'/coats-jackets',
      'Shoes':'/shoes',
      'Accessories':'/accessories',
      'View All':'/all-items',
      'Add Items':'/additem',
      // Add mappings for each category
    };
  
    const path = categoryPaths[category];
    if (path) {
      navigate(path);
    } else {
      console.error("No path found for category:", category);
    }
  };

  return (
    <div className="closet-container">
      <OverlayMenu />
      <header className="closet-header">
        <h1>WARDROBE WIZARD</h1>
        <h3>My Closet</h3>
      </header>
      {showForm && (
        <div className="category-buttons">
        {categories.map((category) => (
          <button 
            key={category} 
            className="category-button" 
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      )}
       {!showForm && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}   
      
      <Footer />
     {/* // <button className="add-item-button"onClick={handleAddItem}>Add Item</button> */}
    </div>
  );
};

export default Closet;
