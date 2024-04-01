import React, { useState, useEffect } from 'react';
import '../styles/Accessories.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/accessories')
        .then( res => {
            setAccessories(res.data)
            
        })
        .catch((e) => {
            console.log(e)
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
                    <Link to={`/item-detail/${Accessory.name}`} key={Accessory.name} className="Accessories-item-link">
                    <div className="Accessories-item" key={Accessory.name}>
                        <div className="Accessories-image"><img src = { `http://localhost:3001${Accessory.img}`} width={200} /></div> 
                        <div className="Accessories-info">
                            <h3>{Accessory.name}</h3>
                            <p>{Accessory.brand}</p>
                            <p>{Accessory.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Accessories;