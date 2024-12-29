import { useState } from 'react'
import './App.css'
import Homepage from './Home/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
