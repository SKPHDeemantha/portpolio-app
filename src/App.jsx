import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Portfolio from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
import Test from './pages/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/' element={<Portfolio/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/myprojects' element={<MyProjects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
      <Route path='test' element={<Test/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
