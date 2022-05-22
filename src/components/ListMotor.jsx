import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMotor from './CardMotor'

const ListMotor = () => {
const URL = "http://localhost:3500/motor"
    
const getData = async () => {
  const response = axios.get(URL);
  
return response;
}

const [list,setList] = useState([]);

useEffect(() => {
  getData()
  .then((response)=>{
    
    setList(response.data);
    
 });   
},[])

  return (
    <div>
      {
        list.map((motorbike,index) => (
          
         <CardMotor 
         key={index}
          motorbike={motorbike}
          />
        ))
      }


      
    </div>
  )
}

export default ListMotor