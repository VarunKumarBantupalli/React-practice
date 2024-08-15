import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" name='username' id=''/>
          <input type="password" name="password" id="" />
          <input type="submit" value="submit"/>
        </form>
      </div>
    </>
  )
}

export default App
