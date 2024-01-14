import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  Contact,
  CreateCourse
} from './pages'
import Nav from './components/nav'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='md:w-3/4 md:mx-auto sm:mx-8 mx-4 '>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/create-course"  element={<CreateCourse/>} />
        </Routes>
        <Footer/>
      </Router>
      </div>
    </div>
  )
}

export default App
