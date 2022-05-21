import React, { useEffect } from 'react'
import axios from 'axios'

const ListMotor = () => {
const URL = "http://localhost:3500/motor"
    
const getData = async () => {
  const response = axios.get(URL);
  
return response;

}


useEffect(() => {
  getData()
  .then((response)=>{
    
    console.log(response);
 });   
},[])

  return (
    <div>ListMotor</div>
  )
}

export default ListMotor