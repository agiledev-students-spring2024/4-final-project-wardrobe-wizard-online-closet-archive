import React, { useState } from 'react';
import './AddItem.css'; // Ensure you have the corresponding CSS file

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

    // Handle the form submission here
    // You will need to do something with the formData, like sending it to a backend service

    console.log(formData);

    // Clear the form
    setFormData({
      name: '',
      type: '',
      brand: '',
      color: '',
      picture: null
    });
  };

  return (
    <div className="add-item-container">
      <header className="add-item-header">
        <button className="menu-button">☰</button>
        <h1>Wardrobe Wizard</h1>
        <h2>Add Item</h2>
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

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

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
    </div>
  );
};

export default AddItem;
