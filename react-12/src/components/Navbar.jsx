import React from 'react'
import { memo } from 'react'


const Navbar = ({adjective  , getAdjective}) => {
    console.log("navbar is rendered")
  return (
    <div>
      i am {getAdjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
      
    </div>
  )
}

export default memo(Navbar)
