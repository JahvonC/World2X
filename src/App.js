import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ParticleBackground from './components/ParticleBackground';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Nav';
import { Col, Container, Row } from 'react-bootstrap';
import Carosel from './Carosel'
import MainTwo from './components/MainTwo';
import image1 from '/workspaces/World2X/src/assets/JahvonC_a_Pablo_Picasso_style_image_of_two_twin_black_women_hol_2f696397-a803-4abc-a1e5-47a078fbe56f.png'
import image2 from '/workspaces/World2X/src/assets/JahvonC_a_Pablo_Picasso_style_image_of_two_twin_black_women_hol_d764c884-5f75-4396-adad-4388210a5a3a.png'
import image3 from '/workspaces/World2X/src/assets/JahvonC_an_album_cover_with_a_3D_render_of_two_guns_with_arms_a_b8a834ae-f570-4eea-b90f-2d6a57094a63.png'


function UpperStrip() {
  // const style = {
  //   width: '100%',
  //   height: '100%'
  // }

 

  return (
    <Container fluid className='text-center border-none bg-dark'>
      <Row>
        <Col>
          <img  className='' src={image1} alt='two women album cover'/>
        </Col>
        <Col>
          <img  className='float-right' src={image2} alt='album cover'/>
          
        </Col>
        <Col>
          <img className='float-left'  src={image3} alt='album cover'/>
        </Col>
      </Row>
    </Container>
  )
}



function App() {




  
  return (
    <>
       <ParticleBackground/>
       <Container fluid className="text-center bg-dark">
          <NavBar/>
       </Container>
       <Container fluid className="bg-dark">
        <Container className="bg-dark justify-content-center mb-5">
            <Carosel/>
        </Container>
        <UpperStrip className='container-fluid'/>
       </Container>
       <MainTwo/>
    </>
  
  );
}

export default App;
