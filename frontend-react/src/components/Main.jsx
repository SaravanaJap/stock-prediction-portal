import React from 'react'
import Button from './Button';


const Main = () => {
  return (
    <>

      <div className= 'container'>
        <div className = 'p-5 text-center bg-light-dark rounded'>
          <h1 className = 'text-light'>Stock Prediction Portal</h1>
          <p className = 'text-light lead' > This stock prediction application utilizes the  machine learning techniques,specifically employing keras,TensorFlow and LSTM models,integrated with django framework.It forecasts future stock prices by analyzing 100-day and 200-day moving averages,essential indicators widely used by stock analysts to  inform trading and investment decisions. </p>
          <Button text = 'Register' class='btn-success' />
        </div>

      </div>
      
    </>
  )
}

export default Main