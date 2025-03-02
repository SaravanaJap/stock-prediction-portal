import React from 'react'
import logo from '/public/assets/stock-prediction-high-resolution-logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <nav className = 'navbar container pt-3 pb-3 align-items-start '>
            <Link to="/">
              <img  src={logo} alt="Logo" style={{ height: '65px' , width: '90px' }}  /> 
            </Link>

            <div>
                <Button text = 'Login' class='btn-outline-success' url='/Login' />
                &nbsp;
                <Button text = 'Register' class='btn-success' url='/Register' / >
            </div>

        </nav>
    </>

  )
}

export default Header