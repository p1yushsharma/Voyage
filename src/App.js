import React from 'react'
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Gallery from './components/gallery';
import About from './components/about';
import Login from './login';
import Registeration from './register';

const App =()=>{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/'  element={<Home/>}/>
                <Route exact path='Login' element={<Login/>}/>
                <Route exact path='Home'  element={<Home/>}/>
                <Route exact   path='About'  element={<About/>}/>
                <Route exact path='Gallery'  element={<Gallery/>}/>
                <Route exact path= "Registeration" element={<Registeration/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;