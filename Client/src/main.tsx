import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <AuthContextProvider>
      <App />
      </AuthContextProvider>    
    </BrowserRouter>
  ,
)
