import React from 'react'
import { Container } from 'react-bootstrap'
import ListMotor from './ListMotor'


const Home = () => {
  return (
    <Container fluid>
    <h1 className='text-center'>Motor List</h1>
    <ListMotor/>
    </Container>
  )
}

export default Home