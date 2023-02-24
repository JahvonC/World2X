import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ParticleBackground from './components/ParticleBackground';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Nav';
import { Carousel, Container } from 'react-bootstrap';
import Main from './Main';
import Carosel from './Carosel'

function App() {


  
  return (
    <>
       <ParticleBackground/>
       <Container fluid className="text-center bg-dark">
          <NavBar/>
       </Container>
       <Container className="bg-dark">
        <Container className="bg-light justify-content-center ">
            <Carosel/>
        </Container>
       </Container>
    </>
  
  );
}

export default App;
