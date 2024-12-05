import { Routes, Route, } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sell from './pages/Sell'
import NotFound from './pages/NotFound'
import Landingpage from './pages/Landingpage'
import Dashboard from './pages/Dashboard'
import { useEffect} from 'react'
import Checkrate from './pages/Checkrate'
import { useCardStore } from './store/cardStore'
import Rates from './pages/Rates'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CustomerReviewForm from './components/CustomerReview'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import ProtectedRoutes from './components/ProtectectedRoute'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
// import Signup from './pages/Signup'


function App() {
  
  const { getCards, cards } = useCardStore()
  useEffect(() =>{
    if(!cards)
    getCards()
  })

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeRoute/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/landingpage' element={<Landingpage/>}/>
        <Route path='/sell' element={<ProtectedRoutes><Sell/></ProtectedRoutes>}/>
        <Route path='/checkrate' element={<Checkrate/>}/>
        <Route path='/rate/:name' element={<ProtectedRoutes><Rates/></ProtectedRoutes>}/>
        <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}/>
        <Route path='/userprofile' element={<ProtectedRoutes><UserProfile/></ProtectedRoutes>}/>
        <Route path='/aboutpage' element={<ProtectedRoutes><AboutPage/></ProtectedRoutes>}/>
        <Route path='/contactpage' element={<ProtectedRoutes><ContactPage/></ProtectedRoutes>}/>
        <Route path='/customerReview' element={<ProtectedRoutes><CustomerReviewForm/></ProtectedRoutes>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      
    </>
  )
}

export default App

const HomeRoute = ({}) => {
  return localStorage.getItem("token")?<Home/>:<Landingpage/> 
}