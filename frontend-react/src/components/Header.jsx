import React from 'react'
import logo from '/public/assets/stock-prediction-high-resolution-logo.png';
import Button from './Button';


const Header = () => {
  return (
    <>
        <nav className = 'navbar container pt-3 pb-3 align-items-start '>
            <a href=''><img  src={logo} alt="Logo" style={{ height: '65px' , width: '90px' }}  /> </a>

            <div>
                <Button text = 'Login' class='btn-outline-success'/>
                &nbsp;
                <Button text = 'Register' class='btn-success' />
            </div>

        </nav>
    </>

  )
}

export default Header