import { useState } from 'react'
import './App.css'
import HomeAdmin from './pages/admin/homeAdmin/HomeAdmin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomeAdmin />
    </>
  )
}

export default App
