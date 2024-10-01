import React from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Footer from './Pages/Footer'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AboutUsPage from './Pages/AboutUsPage'
import RoomPage from './Pages/RoomsPage'
import Services from './Pages/Services'
import Explore from './Pages/Explore'
import ContactUs from './Pages/ContactUs'
import Whatsapp from './Pages/Whatsapp'

const App = () => {
  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<AboutUsPage/>}/>
         <Route path='/room' element={<RoomPage/>}/>
         {/* <Route path="/rooms/:id" element={<RoomPage/>}/> */}
          <Route path='/services' element={<Services/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          {/* <Route path='/sitemap.xml'/> */}
        </Routes>
        <Footer/>
        <Whatsapp/>
      </BrowserRouter>
  )
}

export default App