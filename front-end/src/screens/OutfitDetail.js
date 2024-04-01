import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import OverlayMenu from '../components/OverlayMenu';
import '../styles/OutfitDetail.css';

const OutfitDetail = () => {
  const { outfitName } = useParams();
  const navigate = useNavigate();
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const encodedOutfitName = encodeURIComponent(outfitName);
    fetch(`http://localhost:3001/outfit-detail/${encodedOutfitName}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setOutfit(data);
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
  if (!outfit) return <div>Outfit not found</div>;

  return (
    <div className="OutfitDetail">
      <OverlayMenu />
      <header className="OutfitDetail-banner">
        <h1>WARDROBE WIZARD</h1>
        <h3>Outfit Details</h3>
      </header>
      <div className="OutfitDetail-container">
        {outfit.items.map(item => (
          <Link to={`/item-detail/${encodeURIComponent(item.name)}`} key={item.name} className="OutfitDetail-item-link">
            <div className="OutfitDetail-item">
              <img src={`http://localhost:3001${item.img}`} alt={item.name} className="OutfitDetail-image" />
              <div className="OutfitDetail-info">
                <h3>{item.name}</h3>
                <p>Brand: {item.brand}</p>
                <p>Type: {item.type}</p>
              </div>
            </div>
          </Link>
        ))}
        <h2 className="OutfitDetail-name">{outfit.outfitName}</h2>
        <p className="OutfitDetail-notes">{outfit.notes}</p>
      </div>
      <button onClick={handleBackClick} className="OutfitDetail-backButton">BACK</button>
    </div>
  );
};

export default OutfitDetail;
