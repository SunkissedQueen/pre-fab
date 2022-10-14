import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import AboutToothTale from "./pages/AboutToothTale"
import Home from "./pages/Home"
import IndexTooth from "./pages/IndexTooth"
import NewTooth from "./pages/NewTooth"
import NoTeeth from "./pages/NoTeeth"
import ShowTooth from "./pages/ShowTooth"
import ToothRepair from "./pages/ToothRepair"

import mockCollectors from "./mockCollector"

const App = () => {

  const [collectors, setCollectors] = useState(mockCollectors)
  console.log(collectors)

  return (
    <>
      <h1>Welcome to the Tooth Tales from the Fairies Perspective!</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutToothTale />} />
          <Route 
            path="/indextooth" 
            element={<IndexTooth collectors={collectors}/>} 
          />
          <Route 
            path="/showtooth/:id"
            element={<ShowTooth collectors={collectors}/>} />
          <Route path="/newtooth" element={<NewTooth />} />
          <Route path="/toothrepair" element={<ToothRepair />} />
          <Route path="*" element={<NoTeeth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
