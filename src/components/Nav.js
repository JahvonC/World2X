import React from 'react'
import './Nav.scss'
import { Container, Col} from 'react-bootstrap';
import 'bootstrap'




const NavBar = () => {




  return (
    <Container fluid className='main_cont'>
      <Col className='navContent'>
        <Col>
          <a className='text-decoration-none' href='#'>WORLD 2X</a>
        </Col>
        </Col>
    </Container>
  )
}

export default NavBar