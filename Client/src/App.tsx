import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sell from './pages/Sell'
import NotFound from './pages/NotFound'
import Landingpage from './pages/Landingpage'
import Dashboard from './pages/Dashboard'
import Settings from './pages/UserProfile'
import Login from './pages/Login'
import { useEffect} from 'react'
import Checkrate from './pages/Checkrate'
import { useAuthStore } from './store/authStore'
import { useCardStore } from './store/cardStore'
import Rates from './pages/Rates'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Signup from './pages/Signup'
// import { useAuthContext } from './context/AuthContext'

function App() {
  const { getCards, cards } = useCardStore()
  useEffect(() =>{
    if(!cards)
    getCards()
  })
  // const [authUser] = useAuthContext()
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeRoute/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/landingpage' element={<Landingpage/>}/> */}
        <Route path='/sell' element={<ProtectedRoutes><Sell/></ProtectedRoutes>}/>
        <Route path='/checkrate' element={<Checkrate/>}/>
        <Route path='/rate/:name' element={<ProtectedRoutes><Rates/></ProtectedRoutes>}/>
        <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}/>
        <Route path='/settings' element={<ProtectedRoutes><Settings/></ProtectedRoutes>}/>
        <Route path='/aboutpage' element={<ProtectedRoutes><AboutPage/></ProtectedRoutes>}/>
        <Route path='/contactpage' element={<ProtectedRoutes><ContactPage/></ProtectedRoutes>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      
    </>
  )
}

export default App

const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {user, checkAuth} = useAuthStore()
  useEffect(() => {
    if(!user){
      checkAuth()
    }
  })
  return user?children:<Landingpage/>
  
}

const HomeRoute = ({}) => {
  return localStorage.getItem("token")?<Home/>:<Landingpage/> 
}