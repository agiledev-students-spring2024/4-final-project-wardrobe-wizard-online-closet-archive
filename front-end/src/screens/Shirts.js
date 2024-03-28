import React, { useState, useEffect } from 'react';
import '../styles/Shirts.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Shirt = () => {
 
    const [shirts, setShirts] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/shirts')
        .then( res => {
            setShirts(res.data)
            
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);
    console.log(shirts)
    
    return(
        <div className="Shirt">
            <OverlayMenu />
            <header className='Shirt-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Shirts</h3>
            </header>
            <div className="Shirt-list">
                {shirts.map((shirt, index) => (

                    <Link to={`/item-detail/${shirt.name}`} key={index} className="Shirt-item-link">

                    <div className="Shirt-item" key={index}>
                        <div className="Shirt-image"><img src = { `http://localhost:3001${shirt.img}`} width={200} /></div> {/* Placeholder for the image */}

                        <div className="Shirt-info">
                            <h3>{shirt.name}</h3>
                            <p>{shirt.brand}</p>
                            <p>{shirt.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Shirt;
//source: https://react.dev/reference/react/useEffect#useeffect