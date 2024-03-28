import React, { useState, useEffect } from 'react';
import '../styles/Skirts_Dresses.css'; // Make sure this path is correct
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
                {skirts.map((SkirtDresses, index) => (
                    <div className="Skirts_Dresses-item" key={index}>
                        <div className="Skirts_Dresses-image"><img src = { `http://localhost:3001${SkirtDresses.img}`} width={200} /></div> 
                        <div className="Skirts_Dresses-info">
                            <h3>{SkirtDresses.name}</h3>
                            <p>{SkirtDresses.brand}</p>
                            <p>{SkirtDresses.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkirtsDresses;