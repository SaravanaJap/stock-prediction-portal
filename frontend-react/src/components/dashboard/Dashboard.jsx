import React, { useEffect } from 'react'
import axios  from 'axios'
import axiosInstance  from '../../axisInstance'

const Dashboard = () => {
    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosInstance.get('/protected_view/') 
                console.log('success',response.data);
            }catch(error){
                console.error("Error fetching data",error)
            }
        }
        fetchProtectedData();
    },[])
  return (
    <div className = 'text-light container' >Dashboard</div>
  )
}

export default Dashboard 