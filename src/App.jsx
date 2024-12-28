import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Homepage from './Home/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage></Homepage>
    </>
  )
}

export default App
