import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/OutfitDetail.css';
import axios from 'axios';

const OutfitDetail = () => {
  const { outfitName } = useParams();
  const navigate = useNavigate();
  const [outfitDetails, setOutfitDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const encodedOutfitName = encodeURIComponent(outfitName);
    const token = localStorage.getItem('token');
    axios.get(`http://159.203.82.135:3001/outfit-detail/${encodedOutfitName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setOutfitDetails(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.toString());
      setLoading(false);
    });
  }, [outfitName]);

  const handleBackClick = () => navigate(-1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!outfitDetails) return <div>Outfit not found</div>;

  const handleDeleteOutfit = async () => {
    try {
      const encodedOutfitName = encodeURIComponent(outfitName);
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3001/outfit-detail/${encodedOutfitName}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Outfit deleted successfully');
      navigate(-1); 
    } catch (error) {
      setError('Error deleting outfit: ' + error.response.data.message);
    }
  };
  

  return (
    <div className="OutfitDetail">
      <OverlayMenu />
      <header className="OutfitDetail-banner">
        <h1>WARDROBE WIZARD</h1>
        <h3>Outfit Details</h3>
      </header>
      <div className="OutfitDetail-container">
        {outfitDetails.items.map((item) => (
          <Link to={`/item-detail/${encodeURIComponent(item.nameItem)}`} key={item.nameItem} className="OutfitDetail-item-link">
            <div className="OutfitDetail-item">
              <img src={`http://localhost:3001${item.imgLink}`} alt={item.nameItem} className="OutfitDetail-image" />
              <div className="OutfitDetail-info">
                <h3>{item.nameItem}</h3>
                <p>Brand: {item.brand}</p>
                <p>Type: {item.type}</p>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
      <h2 className="OutfitDetail-name">{outfitDetails.outfit.outfitName}</h2>
      <p className="OutfitDetail-notes">{outfitDetails.outfit.outfitNotes}</p>
      <button onClick={handleBackClick} className="OutfitDetail-backButton">BACK</button>
      <button onClick={handleDeleteOutfit} className="OutfitDetail-deleteButton">DELETE</button>
    </div>
  );
};

export default OutfitDetail;
