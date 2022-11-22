import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Carrinho } from './pages/Carrinho/Carrinho'
import { Home } from './pages/Home/Home'
import { NotFind } from './pages/NotFind/NotFind'
import { Weapons } from './pages/Weapons/Weapons'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/carrinho' element={<Carrinho />} />

        <Route path='/weapons'>
          <Route index element ={<Weapons />}/>
          <Route path='/weapons/:gun' element={<Weapons />} />
        </Route>
        
        <Route path='*' element={<NotFind />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
