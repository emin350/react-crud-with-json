import axios from 'axios'
import React, { useState } from 'react'
import { Container,Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NewMotor = () => {
const [data,setData] = useState({refer:"",model:""})
const navigate = useNavigate();
const handleChange = ({target}) => {
  setData({
    ...data,
    [target.name]:target.value
  })
}

const URL = "http://localhost:3500/motor"

const handleSubmit = async (e) => {
  e.preventDefault();
 const response = await axios.post(URL,data)
 console.log(response);
 navigate("/");
}

  return (

   <Container>
     <h1>New Motorbike</h1>
<Form 
onSubmit={handleSubmit}
>

<Form.Group className='mb-3'>
<Form.Control 
  type="text" 
  placeholder="Refer" 
  name="refer"
  value={data.refer}
  onChange={handleChange}
  />
</Form.Group>

<Form.Group className='mb-3'>
<Form.Control 
  type="text" 
  placeholder="Model" 
  name="model"
  value={data.model}
  onChange={handleChange}
  />
</Form.Group>
<button className='btn btn-success'>Ekle</button>

</Form>
</Container>



  )
}

export default NewMotor