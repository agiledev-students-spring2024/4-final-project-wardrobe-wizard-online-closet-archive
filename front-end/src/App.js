import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import Registration from './screens/Registration';
import Accessories from './screens/Accessories';
import All_Items from './screens/All_Items';
import Coats_Jackets from './screens/Coats_Jackets';
import Pants from './screens/Pants';
import Shirt from './screens/Shirts';
import Shoes from './screens/Shoes';
import Skirts_Dresses from './screens/Skirts_Dresses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/all-items" element={<All_Items/>} />
        <Route path="/coats-jackets" element={<Coats_Jackets/>} />
        <Route path="/pants" element={<Pants/>} />
        <Route path="/shirt" element={<Shirt/>} />
        <Route path="/shoes" element={<Shoes/>} />
        <Route path="/skirts-dresses" element={<Skirts_Dresses/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//https://www.w3schools.com/react/react_router.asp