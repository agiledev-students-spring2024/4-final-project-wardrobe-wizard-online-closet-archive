import '../styles/Home.css'
import OverlayMenu from '../components/OverlayMenu';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="Home">
            <OverlayMenu />
            <div className='banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Home Page</h3>
            </div>
            <div className="homeList"> 
                <h3><Link to="/home">View Closet</Link></h3>   
                <h3><Link to="/view-closet">Add Item</Link></h3>  
                <h3><Link to="/outfit-archive">Outfit Archive</Link></h3>  
                <h3><Link to="/generator">Generator Outfit</Link></h3>  
            </div>
        </div>
    )
}

export default Home;