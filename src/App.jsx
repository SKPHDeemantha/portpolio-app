import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/myprojects' element={<MyProjects/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
