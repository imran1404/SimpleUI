import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Crud from './components/Crud'
import Header from './components/Header'
import Home from './components/Home'
import  "./Styles/App.css"
import  "./Styles/Home.css"

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    <Crud/>
    </>
  )
}

export default App