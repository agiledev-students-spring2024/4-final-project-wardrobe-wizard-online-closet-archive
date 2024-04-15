import '../styles/Home.css'
import OverlayMenu from '../components/OverlayMenu';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Home(){
    const [showForm, setShowForm] = useState(false);
    useEffect(() =>{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get('http://localhost:3001/verify_login', config)
        .then( res => {
           setShowForm(res.data.loggedIn)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);
    return(
        <div className="Home">
            <OverlayMenu />
            <div className='bannerhome'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Home Page</h3>
            </div>
            { showForm && (
            <div className="homeList"> 
                <h3><Link to="/closet">View Closet</Link></h3>   
                <h3><Link to="/additem">Add Item</Link></h3>  
                <h3><Link to="/Archive">Outfit Archive</Link></h3>  
                <h3><Link to="/generator">Generator Outfit</Link></h3>  
            </div>)}
            {!showForm && (
                <div>
                    <h3 id='loginWarning'>Please login <Link to="/">here</Link> to use this page</h3>
                </div>

            )}   
            <Footer />
        </div>
        
    )
}

export default Home;