import React, { useState } from 'react'
import { Container, Col, Row, Form} from 'react-bootstrap';
import 'bootstrap'
import image from '/workspaces/World2X/src/assets/picOne.jpeg'
import '/workspaces/World2X/src/components/MainTwo.scss'


const MainTwo = () => {
  
  


  return (
    <footer>
    <Container fluid className='main_Two p-2 bg-dark text-center' id='mainTwoContainer'>
    
            <Form>
                <h3 className='text-light'>Subscribe</h3>
                <fieldset>
                    <label className='text-light' htmlFor='name'>
                        Name:
                    </label>
                    <input style={{border: '1px solid white', borderRadius: '15px'}} type='text' placeholder='Enter Your Name' XXXautofocusXXX/>
                    <label htmlFor='email'>Email:</label>
                    <input  type='email' placeholder='Enter Your Email' XXXautofocusXXX/>
                </fieldset>
            </Form>
  
    </Container>
    </footer>
  )
}

export default MainTwo