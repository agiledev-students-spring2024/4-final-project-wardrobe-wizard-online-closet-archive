import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import Registration from './screens/Registration';
import Accessories from './screens/Accessories';
import AllItems from './screens/All_Items';
import CoatsJackets from './screens/Coats_Jackets';
import Pants from './screens/Pants';
import Shirt from './screens/Shirts';
import Shoes from './screens/Shoes';
import SkirtsDresses from './screens/Skirts_Dresses';
import Closet from './screens/Closet';
import AddItem from './screens/AddItem';
import Generator from './screens/Generator';
import RandomOutfitGenerator from './screens/RandomOutfitGenerator';
import ItemDetail from './screens/ItemDetail';
import OutfitDetail from './screens/OutfitDetail';
import Archive from './screens/Archive';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/closet" element={<Closet/>} />
        <Route path="/additem" element={<AddItem/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/all-items" element={<AllItems/>} />
        <Route path="/coats-jackets" element={<CoatsJackets/>} />
        <Route path="/pants" element={<Pants/>} />
        <Route path="/shirt" element={<Shirt/>} />
        <Route path="/shoes" element={<Shoes/>} />
        <Route path="/item-detail/:itemName" element={<ItemDetail/>} />
        <Route path="/OutfitDetail" element={<OutfitDetail/>} />
        <Route path="/Archive" element={<Archive/>} />
        <Route path="/skirts-dresses" element={<SkirtsDresses/>} />
        <Route path="/generator" element={<Generator/>} />
        <Route path="/random" element={<RandomOutfitGenerator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//https://www.w3schools.com/react/react_router.asp