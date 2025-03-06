import  { useContext } from 'react'
import logo from '/public/assets/stock-prediction-high-resolution-logo.png';
import Button from './Button';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <>
        <nav className = 'navbar container pt-3 pb-3 align-items-start '>
            <Link to="/">
              <img  src={logo} alt="Logo" style={{ height: '65px' , width: '90px' }}  /> 
            </Link>

            <div>
                {isLoggedIn ? (
                  <>
                  <Button text = 'Dashboard' class='btn-outline-success' url='/dashboard' />
                  &nbsp;
                  <button className = 'btn btn-danger'onClick = {handleLogout} >Logout</button>
                  </>
                ) : ( 
                  <>
                  <Button text = 'Login' class='btn-outline-success' url='/Login' />
                  &nbsp;
                  <Button text = 'Register' class='btn-success' url='/Register' / >
                  </>
                )}
                
            </div>

        </nav>
    </>

  )
}

export default Header