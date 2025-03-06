import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes> 
          <Route path = '/' element = {<Main />} />
          <Route path = '/Register/' element = {<PublicRoute><Register /></PublicRoute>} />
          <Route path = '/Login/' element = {<PublicRoute><Login /></PublicRoute>} />
          <Route path = '/dashboard' element = { <PrivateRoute> <Dashboard /> </PrivateRoute>} /> 
        </Routes>
        <Footer /> 
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
