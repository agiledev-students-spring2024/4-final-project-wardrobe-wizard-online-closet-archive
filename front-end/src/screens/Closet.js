import React from 'react';
import './Closet.css'; // Ensure the CSS file is properly linked

const Closet = () => {
  
  const categories = [
    'Shirts',
    'Pants',
    'Skirts/Dresses',
    'Coats/Jackets',
    'Shoes',
    'Accessories',
    'Misc.'
  ];

  // Handle category click
  const handleCategoryClick = (category) => {
    console.log("Clicked on:", category); // Replace with actual navigation or filtering logic
  };

  return (
    <div className="closet-container">
      <header className="closet-header">
        <button className="menu-button">☰</button>
        <h1>Wardrobe Wizard</h1>
        <h2>My Closet</h2>
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
      <button className="add-item-button">Add Item</button>
    </div>
  );
};

export default Closet;
