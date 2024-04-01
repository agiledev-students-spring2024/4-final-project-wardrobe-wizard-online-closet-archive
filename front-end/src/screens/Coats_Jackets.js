import React, { useState, useEffect } from 'react';
import '../styles/Coats_Jackets.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const CoatsJackets = () => {
    const [jackets, setJackets] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/jackets')
        .then( res => {
            setJackets(res.data)
            
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    return(
        <div className="Coats_Jackets">
            <OverlayMenu />
            <header className='Coats_Jackets-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Coats/Jackets</h3>
            </header>
            <div className="Coats_Jackets-list">
                {jackets.map((CoatJacket) => (
                    <Link to={`/item-detail/${CoatJacket.name}`} key={CoatJacket.name} className="Coats_Jackets-item-link">
                    <div className="Coats_Jackets-item" key={CoatJacket.name}>
                        <div className="Coats_Jakcets-image"><img src = { `http://localhost:3001${CoatJacket.img}`} width={200} /></div> 
                        <div className="Coats_Jackets-info">
                            <h3>{CoatJacket.name}</h3>
                            <p>{CoatJacket.brand}</p>
                            <p>{CoatJacket.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            
        </div>
    );
}

export default CoatsJackets;