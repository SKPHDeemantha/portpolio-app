import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductCard name="Laptop" price="$1055.36" ></ProductCard>
     <ProductCard></ProductCard>
     <ProductCard></ProductCard>
     <ProductCard></ProductCard>
    </>
  )
}

export default App
