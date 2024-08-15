import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
<div className="card">
    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"  alt="" style={{border:"20px solid blue"}}/>



    <h1>{props.title}</h1>
   
    <p>{props.description}</p>
</div>
  )
}

export default Card
