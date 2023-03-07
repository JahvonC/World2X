import React, { useState } from 'react'
import { Container, Col, Row, Form, Button} from 'react-bootstrap';
import 'bootstrap'
import '/workspaces/World2X/src/components/MainTwo.scss'


const MainTwo = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = () => {
    e.preventDefault()
    
  }
  return (
    <footer>
    <Container fluid className='main_Two p-2 bg-dark text-center' id='mainTwoContainer'>
    
            <Form>
                <h3 className='text-light'>Subscribe</h3>
                <fieldset className='d-flex justify-content-between'>
                    <input style={{border: '1px solid white', borderRadius: '15px'}} onSubmit={handleChange} value={setName} onChange={e => setName(e.target.value)} type='text' placeholder='Enter Your Name' XXXautofocusXXX/>
                    <label htmlFor='email'>Email:</label>
                    <input  value={email} onChange={e => setEmail(() => {e.target.value})} type='email' placeholder='Enter Your Email' XXXautofocusXXX/>
                </fieldset>
                <Button className='btn-primary border-2'>Submit</Button>
            </Form>
  
    </Container>
    </footer>
  )
}

export default MainTwo