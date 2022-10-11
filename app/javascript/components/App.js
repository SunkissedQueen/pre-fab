import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import AboutToothTale from "./pages/AboutToothTale"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <h1>Welcome to the Tooth Tales from the Fairies Perspective!</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutToothTale />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
