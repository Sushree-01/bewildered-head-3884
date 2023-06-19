import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import { ContactUs } from '../Pages/ContactUs'
import Navbar from '../Components/Navbar'
import { Notfound } from '../Pages/Notfound'
export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/contact'element={<ContactUs/>}/>
            <Route path='/navbar' element={<Navbar/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
    </div>
  )
}
