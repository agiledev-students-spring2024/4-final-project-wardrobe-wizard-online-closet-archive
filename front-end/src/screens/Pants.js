import React, { useState, useEffect } from 'react';
import '../styles/Pants.css'; // Make sure this path is correct
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Pants = () => {
    const [pants, setPants] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/pants')
        .then( res => {
            setPants(res.data)
            
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    return(
        <div className="Pants">
            <OverlayMenu />
            <header className='Pants-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Pants</h3>
            </header>
            <div className="Pants-list">
                {pants.map((pant, index) => (
                    <div className="Pants-item" key={index}>
                        <div className="Pants-image"><img src = { `http://localhost:3001${pant.img}`} width={200} /></div> 
                        <div className="Pants-info">
                            <h3>{pant.name}</h3>
                            <p>{pant.brand}</p>
                            <p>{pant.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pants;