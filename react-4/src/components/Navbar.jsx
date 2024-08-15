import { useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {

//case 1:
useEffect(()=>{
    alert("this page renders at every time")
   })

useEffect(() => {
alert("welocome to the page...runs only once ")
}, [])

//case 2:
useEffect(() => {
    alert("this page renders when only count changes")
 }, [count])

//case 3:
useEffect(() => {
    alert("this page renders when only color changes")
    }, [count])
      
  return (
    <div>
      hey is {color} colored Navbar
    </div>
  )
}

export default Navbar
