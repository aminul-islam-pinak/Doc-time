import './App.css';
import Navbar from './assets/Pages/Shared/Navbar';
 import { Routes, Route, Link } from "react-router-dom";
import Home from './assets/Pages/Home/Home';
import Login from './assets/Pages/Login/Login';
import Registration from './assets/Pages/Registration/Registration';



function App() {
  return (
    <div >
     <Navbar></Navbar>
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Routes>  

      
    </div>
  );
}

export default App;
