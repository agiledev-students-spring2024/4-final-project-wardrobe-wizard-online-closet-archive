import React, { useState, useEffect } from 'react';
import '../styles/Shoes.css'; // Make sure this path is correct
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
                {shoes.map((Shoe, index) => (
                    <div className="Shoes-item" key={index}>
                        <div className="Shoes-image"><img src = { `http://localhost:3001${Shoe.img}`} width={200} /></div> 
                        <div className="Shoes-info">
                            <h3>{Shoe.name}</h3>
                            <p>{Shoe.brand}</p>
                            <p>{Shoe.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shoes;