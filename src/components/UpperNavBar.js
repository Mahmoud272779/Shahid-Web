import React, { useState } from 'react'
import {Container, Nav, Navbar, Row,Form,Button} from 'react-bootstrap'
const UpperNavBar = ({search}) => {
  const [word,setword]=useState('')
  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' variant='dark'>
      <Container >
        <Navbar.Brand href="#">مطعم جديد </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
  <Form.Control
    type='text'
    placeholder="بحث"
    className="me-2"
    aria-label="بحث"
    onChange={(e) => setword(e.target.value)}
    value={word}
  />
  <button 
    onClick={(e) => {
      e.preventDefault(); // Prevents the form from submitting
      search(word);
      setword('')
    }} 
    className='btn-search mx-2'
  >
    بحث
  </button>
</Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Row>
  )
}

export default UpperNavBar
