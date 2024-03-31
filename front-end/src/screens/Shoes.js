import React, { useState, useEffect } from 'react';
import '../styles/Shoes.css'; // Make sure this path is correct
import { Link } from 'react-router-dom'; // Add this import
import OverlayMenu from '../components/OverlayMenu'; // Import the OverlayMenu component
import axios from 'axios';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/shoes')
        .then( res => {
            setShoes(res.data)
            
        })
        .catch((e) => {
            console.log(e)
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
                    <Link to={`/item-detail/${Shoe.name}`} key={Shoe.name} className="Shoes-item-link">
                    <div className="Shoes-item" key={Shoe.name}>
                        <div className="Shoes-image"><img src = { `http://localhost:3001${Shoe.img}`} width={200} /></div> 
                        <div className="Shoes-info">
                            <h3>{Shoe.name}</h3>
                            <p>{Shoe.brand}</p>
                            <p>{Shoe.type}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Shoes;