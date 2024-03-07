import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';

const Login  =()  => {
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
                <h2>Login</h2>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <input name="username" placeholder='Enter Username' />
                    <br/>
                    <input name="password" placeholder='Enter Password' />
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className='register'>
                <p>Create New Account</p>
            </div>
        </div>
    )
}

export default Login;
//source:https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2)
