import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import React from 'react';
import Home from './Screens/Home'
import Contact from './Screens/Contact';
import FormData from './Screens/FormData';
import About from './Screens/About';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { auth } from './firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


function App(){
       


    return(
        <div>
      <Router>
    <Routes>
    <Route exact path='/' element = {<Home/>}/>
    <Route exact path='/about' element = {<About/>}/>
    <Route exact path='/data' element = {<FormData/>}/>
    <Route exact path='/contact' element = {<Contact/>}/>
    <Route exact path='/signup' element = {<Signup/>}/>
    <Route exact path='/login' element = {<Login/>}/>

    </Routes>
  </Router>
  </div>
    )
      

}

export default App;
