import { Button } from 'bootstrap'
import React from 'react'
import { Card,Container, ListGroup, ListGroupItem} from 'react-bootstrap'

function CardMotor({motorbike}) {
  return (
   <Container>
<Card>
<Card.Body>
<Card.Title>{motorbike.refer}</Card.Title>
<ListGroup>
    <ListGroupItem>{motorbike.model}</ListGroupItem>
    
</ListGroup>
<button className="btn btn-primary me-2" >Edit</button>
<button className="btn btn-danger me-2" >Delete</button>
</Card.Body>
</Card>
</Container>
  )
}

export default CardMotor