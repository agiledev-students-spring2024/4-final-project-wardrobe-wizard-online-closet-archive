import React, { useState, useEffect } from 'react';
import '../styles/Skirts_Dresses.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios'

const SkirtsDresses = () => {
    const [skirts, setSkirts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/skirts')
        .then( res => {
            setSkirts(res.data)
            
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    return(
        <div className="Skirts_Dresses">
            <OverlayMenu />
            <header className='Skirts_Dresses-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Skirts/Dresses</h3>
            </header>
            <div className="Skirts_Dresses-list">
                {skirts.map((SkirtDresses) => (
                    <Link to={`/item-detail/${SkirtDresses.name}`} key={SkirtDresses.name} className="Skirts_Dresses-item-link">
                    <div className="Skirts_Dresses-item" key={SkirtDresses.name}>
                        <div className="Skirts_Dresses-image"><img src = { `http://localhost:3001${SkirtDresses.img}`} width={200} /></div> 
                        <div className="Skirts_Dresses-info">
                            <h3>{SkirtDresses.name}</h3>
                            <p>{SkirtDresses.brand}</p>
                            <p>{SkirtDresses.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SkirtsDresses;