import React from 'react'
import "../Screens/Home.css"
export default function Card(props) {
  return (
    <div className="card data" >
    <div className="card-body"style={{overflow:"hidden"}}>
      <h3 className='card-title'>{new Date(props.date.seconds* 1000).toLocaleDateString()}</h3>
      <br/>
      <h4 className="card-title">Weight: {props.weight}</h4>
      <h4 className="card-title">Height: {props.height}</h4>
      <h4 className="card-title">Fat Percent: {props.fatPercent}</h4>
      <h4 className="card-title">Muscle Mass: {props.muscleMass}</h4>
      <h4 className="card-title">Water Percent: {props.waterPercent}</h4>

    </div>
  </div>
  
  )
}
