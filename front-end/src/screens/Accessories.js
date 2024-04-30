import React, { useState, useEffect } from 'react';
import '../styles/Accessories.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const [loginWarning, setLoginWarning] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get('http://159.203.82.135:3001/accessories', config)
        .then( res => {
            setAccessories(res.data)
            
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
        })
    }, []);

    return(
        <div className="Accessories">
            <OverlayMenu />
            <header className='Accessories-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Accessories</h3>
            </header>
            <div className="Accessories-list">
                {accessories.map((Accessory) => (
                    <Link to={`/item-detail/${Accessory.nameItem}`} key={Accessory.nameItem} className="Accessories-item-link">
                    <div className="Accessories-item" key={Accessory.nameItem}>
                        <div className="Accessories-image"><img src = { `http://localhost:3001${Accessory.imgLink}`} width={200} /></div> 
                        <div className="Accessories-info">
                            <h3>{Accessory.nameItem}</h3>
                            <p>{Accessory.brand}</p>
                            <p>{Accessory.type}</p>
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

export default Accessories;