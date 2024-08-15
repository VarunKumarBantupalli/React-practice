import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./App.css"

function App() {
 

  return (
    <>
      <Navbar/>
      this is the main page of the whole website
      <div className="cards">
      <Card title="explore" description="click here to explore"/>
      <Card title="register" description="click here to register"/>
      <Card title="log in" description="click here to log in"/>
      <Card title="get started" description="click here to get started"/>

      </div>

      <Footer/>
    </>
  )
}

export default App
