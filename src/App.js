import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ParticleBackground from './components/ParticleBackground';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Nav';
import { Container } from 'react-bootstrap';
import Carosel from './Carosel'
import MainTwo from './components/MainTwo';

function App() {


  
  return (
    <>
       <ParticleBackground/>
       <Container fluid className="text-center bg-dark">
          <NavBar/>
       </Container>
       <Container className="bg-dark mb-5">
        <Container className="bg-light justify-content-center">
            <Carosel/>
        </Container>
       </Container>
       <MainTwo/>
    </>
  
  );
}

export default App;
