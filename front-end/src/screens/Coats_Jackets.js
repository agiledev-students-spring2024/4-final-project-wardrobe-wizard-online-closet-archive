import React, { useState, useEffect } from 'react';
import '../styles/Coats_Jackets.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const CoatsJackets = () => {
    const [jackets, setJackets] = useState([]);
    const [loginWarning, setLoginWarning] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get('http://159.203.82.135:3001/jackets', config)
        .then( res => {
            setJackets(res.data)
            
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
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
                    <Link to={`/item-detail/${CoatJacket.nameItem}`} key={CoatJacket.nameItem} className="Coats_Jackets-item-link">
                    <div className="Coats_Jackets-item" key={CoatJacket.nameItem}>
                        <div className="Coats_Jakcets-image"><img src = { `http://localhost:3001${CoatJacket.imgLink}`} width={200} /></div> 
                        <div className="Coats_Jackets-info">
                            <h3>{CoatJacket.nameItem}</h3>
                            <p>{CoatJacket.brand}</p>
                            <p>{CoatJacket.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            {loginWarning && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}   
        </div>
    );
}

export default CoatsJackets;