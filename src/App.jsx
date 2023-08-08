import { useState } from 'react'
import './App.css'
import Index from './pages/Index'
import MainLoyout from './layouts/MainLayouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLoyout>
      <Index/>
    </MainLoyout>
  )
}

export default App
