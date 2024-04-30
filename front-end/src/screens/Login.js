import '../styles/Login.css'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import Footer from '../components/Footer'; 
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate(); 
    const [wrongLogin, setWrongLogin] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        console.log(username,password);
        axios.post('http://159.203.82.135:3001/login', {
            username: username,
            password: password
        }).then( res => {
            // console.log(res.data.loggedIn);
            /*
                we are using local storage to save the token. first the request is made to the express app
                and once the login information is verfied and a token returned it is saved.
            */
                if(res.data.loggedIn){
                    navigate('/home')
                    localStorage.setItem('token', res.data.token)
                }
                else{
                    setWrongLogin(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return(
        <div className="Login">
            <div className='banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Unlock Your Closet's Potential</h3>
            </div>
            <div className='login'>
                <h2>Login</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name="username" placeholder='Enter Username' />
                    <br/>
                    <input name="password" placeholder='Enter Password' type ='password'/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className='register'>
                <p><Link to="/register">Create New Account</Link></p>
            </div>
            {wrongLogin && (
                <div className='wrongLogin'>
                    <p>Wrong Username or Password. Please try again.</p>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Login;
//source:https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2)
//source: https://axios-http.com/docs/api_intro