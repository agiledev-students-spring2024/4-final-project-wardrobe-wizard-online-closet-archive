import React, { useState, useEffect } from 'react';
import '../styles/Shirts.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Shirt = () => {
    const [shirts, setShirts] = useState([]);
    const [loginWarning, setLoginWarning] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        /*
            every page needs to pass in the authorization header in order to be able to make the get request which ensures 
            only logged in users can see content
        */
        axios.get('http://localhost:3001/shirts', config)
        .then( res => {
            setShirts(res.data)
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
        })
    }, []);
    
    return(
        <div className="Shirt">
            <OverlayMenu />
            <header className='Shirt-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Shirts</h3>
            </header>
            <div className="Shirt-list">
                {shirts.map((shirt) => (
                    <Link to={`/item-detail/${shirt.nameItem}`} key={shirt.nameItem} className="Shirt-item-link">
                    <div className="Shirt-item" key={shirt.nameItem}>
                        <div className="Shirt-image"><img src = { `http://localhost:3001${shirt.imgLink}`} width={200} /></div> {/* Placeholder for the image */}
                        <div className="Shirt-info">
                            <h3>{shirt.nameItem}</h3>
                            <p>{shirt.brand}</p>
                            <p>{shirt.type}</p>
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

export default Shirt;
//source: https://react.dev/reference/react/useEffect#useeffect