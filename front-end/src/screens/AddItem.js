import React, { useState } from 'react';
import '../styles/AddItem.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu'; 
import Footer from '../components/Footer'; 

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    brand: '',
    type:'',
    color: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category); // Ensure consistency in naming
    data.append('brand', formData.brand);
    data.append('color', formData.color);
    data.append('type', formData.type);
    data.append('picture', formData.picture);
  
    // Example: POST request to your backend endpoint
    fetch('/api/additem', {
      method: 'POST',
      body: data, // FormData object
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Clear the form or redirect user as needed
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    // Adjusted form reset to match the state fields
    setFormData({
      name: '',
      category: '', // Ensure consistency in naming
      brand: '',
      color: '',
      type:'',
      picture: null
    });
  };
  

  return (
    <div className="add-item-container">
      <OverlayMenu />
      <header className="add-item-header">
        <h1>WARDROBE WIZARD</h1>
        <h3>Add Item</h3>
      </header>
      <form onSubmit={handleSubmit} className="add-item-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="Category">Category: </label>
        <select
          id="Category"
          name="Category"
          value={formData.Category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="SkirtsDresses">Skirts/Dresses</option>
          <option value="CoatsJackets">Coats/Jackets</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessories">Accessories</option>
        </select>


        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />


        <label htmlFor="picture">Picture:</label>
        <input
          type="file"
          id="picture"
          name="picture"
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">Add Item</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddItem;
