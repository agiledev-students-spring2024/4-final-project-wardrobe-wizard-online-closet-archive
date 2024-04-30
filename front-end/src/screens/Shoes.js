import React, { useState, useEffect } from 'react';
import '../styles/Shoes.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);
    const [loginWarning, setLoginWarning] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        axios.get('http://159.203.82.135:3001/shoes', config)
        .then( res => {
            setShoes(res.data)
            
        })
        .catch((e) => {
            console.log(e)
            setLoginWarning(true);
        })
    }, []);

    return(
        <div className="Shoes">
            <OverlayMenu />
            <header className='Shoes-banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Shoes</h3>
            </header>
            <div className="Shoes-list">
                {shoes.map((Shoe) => (
                    <Link to={`/item-detail/${Shoe.nameItem}`} key={Shoe.nameItem} className="Shoes-item-link">
                    <div className="Shoes-item" key={Shoe.nameItem}>
                        <div className="Shoes-image"><img src = { `http://localhost:3001${Shoe.imgLink}`} width={200} /></div> 
                        <div className="Shoes-info">
                            <h3>{Shoe.nameItem}</h3>
                            <p>{Shoe.brand}</p>
                            <p>{Shoe.type}</p>
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

export default Shoes;