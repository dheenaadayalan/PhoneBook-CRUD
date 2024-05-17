import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Create from './Pages/Create';
import Navbar from './Components/Navbar';

function App() {
  const [id, setId] = useState(0)
  const [length, setLength] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home setId={setId} setLength={setLength}/>}/>
          <Route path='/edit/:id' element={<Edit id ={id}/>}/>
          <Route path='/create' element={<Create length={length}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
