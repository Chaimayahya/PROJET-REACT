import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <Navbar bg="dark" data-bs-theme="dark">
             <Container>
             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
             <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#features">Features</Nav.Link>
             <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
         </Navbar>
         </div>
      </header>
      
    </div>
    
  );
}

export default App;
