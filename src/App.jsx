import React from 'react'
import CakeContainer from './CakeContainer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<CakeContainer/>}/>
      </Routes>

    </div>
  )
}

export default App