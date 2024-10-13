import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sell from './pages/Sell'
import NotFound from './pages/NotFound'
import Razergold from './pages/Razergold'
import Apple from './pages/Apple'
import Amazon from './pages/Amazon'
import Landingpage from './pages/Landingpage'
import American from './pages/American'
import Ebay from './pages/Ebay'
import Google from './pages/Google'
import Mastercard from './pages/Mastercard'
import Playstation from './pages/Playstation'
import Steam from './pages/Steam'
import Vanilla from './pages/Vanilla'
import Walmart from './pages/Walmart'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Login from './pages/Login'
import { useState } from 'react'
import Checkrate from './pages/checkrate'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeRoute/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/landingpage' element={<Landingpage/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/checkrate' element={<Checkrate/>}/>
        <Route path='/razergold' element={<Razergold/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/amazon' element={<Amazon/>}/>
        <Route path='/american' element={<American/>}/>
        <Route path='/ebay' element={<Ebay/>}/>
        <Route path='/google' element={<Google/>}/>
        <Route path='/mastercard' element={<Mastercard/>}/>
        <Route path='/playstation' element={<Playstation/>}/>
        <Route path='/steam' element={<Steam/>}/>
        <Route path='/vanilla' element={<Vanilla/>}/>
        <Route path='/walmart' element={<Walmart/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App


const HomeRoute = () => {
  const [isloggedin, setIsLoggedin] = useState(true)
  // setIsLoggedin(true)
  return isloggedin?<Home/>:<Landingpage/> 
}