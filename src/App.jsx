import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './component/About'
import Room from './component/Room'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <About/>
        <Room/>
        <Footer/>
    </div>
  )
}

export default App