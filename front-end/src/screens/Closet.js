import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Closet.css'; // Ensure the CSS file is properly linked
import OverlayMenu from '../components/OverlayMenu'; 
import Footer from '../components/Footer'; 

const Closet = () => {
  const navigate = useNavigate();

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
      <Footer />
     {/* // <button className="add-item-button"onClick={handleAddItem}>Add Item</button> */}
    </div>
  );
};

export default Closet;
