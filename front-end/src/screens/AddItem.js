import React, { useState, useEffect} from 'react';
import '../styles/AddItem.css'; // Ensure you have the corresponding CSS file
import OverlayMenu from '../components/OverlayMenu'; 
import Footer from '../components/Footer'; 
import axios from 'axios';
import { Link } from 'react-router-dom'; // Add this import

const AddItem = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
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
    data.append('category', formData.category);
    data.append('brand', formData.brand);
    data.append('color', formData.color);
    data.append('type', formData.type);
    data.append('picture', formData.picture);
  
    // Example: POST request to your backend endpoint
    fetch('http://localhost:3001/additem', {
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
  return (
    <div className="add-item-container">
      <OverlayMenu />
      <header className="add-item-header">
        <h1>WARDROBE WIZARD</h1>
        <h3>Add Item</h3>
      </header>
      { showForm && (
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

        <label htmlFor="category">Category: </label>
        <select
          id="category"
          name="category"
          value={formData.Category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="Skirts">Skirts/Dresses</option>
          <option value="Jackets">Coats/Jackets</option>
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
      )}
      {!showForm && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}  
      <Footer />
    </div>
  );
};

export default AddItem;
