import React, { useState, useEffect } from 'react';
import Top from '../components/Navbar';
import Card from "../components/dataCard";
import dataServices from '../services/data.services';
import Footer from '../components/Footer';
import "./Home.css"
export default function Home() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
      dataServices.getData().then(data=>setArr(data))
     
  }, []);
  // useEffect(
  //   ()=>{
      
  //   },[uid]
  // )
  
  
  return (
    <>
      <div className='App'>
        <Top />
        {/* <button className='bt'><Link to ="/data">Add</Link></button> */}
      </div>
      
      {arr !== null ? (
  <div className="container-fluid ">
    <div className='container-fluid Card-Center'><h1>Cards:</h1></div>
    <div className="row">
      {arr.map((item, index) => (
        <div className="col-md-6">
          <Card style ={{"justify-content":"center"}} date = {item.date} weight = {item.weight} height = {item.height} fatPercent = {item.fatPercent} muscleMass = {item.muscleMass} waterPercent = {item.waterPercent}/>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className='container-fluid Card-Center'><h1>Cards:</h1></div>
)}
    <Footer/></>
  );
}
