import React, { useState } from 'react';
import '../styles/AddItem.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu'; 
import Footer from '../components/Footer'; 

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    brand: '',
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

    

    console.log(formData);

    // Clear the form
    setFormData({
      name: '',
      Category: '',
      brand: '',
      color: '',
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
          <option value="Skirts/Dresses">Skirts/Dresses</option>
          <option value="Coats/Jackets">Coats/Jackets</option>
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
