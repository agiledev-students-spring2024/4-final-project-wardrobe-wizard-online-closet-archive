import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import Registration from './screens/Registration';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//https://www.w3schools.com/react/react_router.asp