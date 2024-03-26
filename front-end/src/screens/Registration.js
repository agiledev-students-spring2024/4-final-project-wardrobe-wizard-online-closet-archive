import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 

function Registration(){
    const navigate = useNavigate(); 
    const handleSubmit  = () => {
        navigate('/home')
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
                    <input name="password" placeholder='Confirm Password' type ='password' />
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Registration;