import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Signup from "./components/Signup";
import Registration from './components/Registration';
import Home from "./components/Home";
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
