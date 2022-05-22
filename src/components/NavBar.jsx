import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Link to="/">Home</Link>
    <Link to="/new">New Motor</Link>
    </Container>
  </Navbar>
   
  )
}

export default NavBar

//"start-server":"json-server --watch --p 3004 db.json"