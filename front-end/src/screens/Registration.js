import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 
import { useState } from 'react';
import axios from 'axios';

function Registration(){
    const navigate = useNavigate(); 
    const [takenUsername, setTakenUsername] = useState(false);
    const [matchingPasswords, setMatchingPasswords] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        const password_copy = form.password_copy.value;
        if(password != password_copy){
            setMatchingPasswords(true);
        }
        else{  
            setMatchingPasswords(false); 
            console.log(username,password);
            axios.post('http://localhost:3001/register', {
                username: username,
                password: password
            }).then( res => {
                console.log(res.data.created);
                    if(res.data.created){
                        navigate('/home')
                        localStorage.setItem('token', res.data.token)
                    }
                    else{
                        setTakenUsername(true);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        

    }
    return(
        <div className="Login">
            <div className='banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Unlock Your Closet's Potential</h3>
            </div>
            <div className='login'>
                <h2>Register</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name="username" placeholder='Enter Username' />
                    <br/>
                    <input name="password" placeholder='Enter Password' type ='password'/>
                    <br/>
                    <input name="password_copy" placeholder='Confirm Password' type ='password' />
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
            {takenUsername && (
                <div className='takenUsername'>
                    <p>This username is taken. Please choose another</p>
                </div>
            )}
            {matchingPasswords && (
                <div className='matchingPasswords'>
                    <p>Passwords do not match</p>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Registration;