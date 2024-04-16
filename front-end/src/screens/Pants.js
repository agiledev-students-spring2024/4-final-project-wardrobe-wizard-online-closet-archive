import React, { useState, useEffect } from 'react';
import '../styles/Pants.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Pants = () => {
    const [pants, setPants] = useState([]);
    const [loginWarning, setLoginWarning] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get('http://localhost:3001/pants', config)
        .then( res => {
            setPants(res.data)
            
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
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
                {pants.map((pant) => (
                    <Link to={`/item-detail/${pant.nameItem}`} key={pant.nameItem} className="Pants-item-link">
                    <div className="Pants-item" key={pant.nameItem}>
                        <div className="Pants-image"><img src = { `http://localhost:3001${pant.imgLink}`} width={200} /></div> 
                        <div className="Pants-info">
                            <h3>{pant.nameItem}</h3>
                            <p>{pant.brand}</p>
                            <p>{pant.type}</p>
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

export default Pants;