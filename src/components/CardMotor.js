import axios from 'axios'
import React from 'react'
import { Card,Container, ListGroup, ListGroupItem, button} from 'react-bootstrap'

function CardMotor({motorbike}) {

  const URL = "http://localhost:3500/motor"

const handleDelete = async () => {
const response = await axios.delete(`${URL}/${motorbike.id}`)
console.log(response)
}


  return (
   <Container>
<Card>
<Card.Body>
<Card.Title>{motorbike.refer}</Card.Title>
<ListGroup>
    <ListGroupItem>{motorbike.model}</ListGroupItem>
    
</ListGroup>
<button className="btn btn-primary me-2" >Edit</button>
<button className="btn btn-danger me-2" onClick={handleDelete} >Delete</button>
</Card.Body>
</Card>
</Container>
  )
}

export default CardMotor