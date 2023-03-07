import React from 'react'
import './Nav.scss'
import { Container, Col, Row} from 'react-bootstrap';
import 'bootstrap'




const NavBar = () => {




  return (
    <Container fluid className='main_cont'>
      <Row>
        <Col className='d-flex justify-content-between'>
          <a href='#'>World2X</a>
          <a href='#'>Booking</a>
          <a href='#'>Dates</a> 
        </Col>
      </Row>
    </Container>
  )
}

export default NavBar;