import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Cards1() {
    return (
     <div className='main'>   
     <div className="Cards">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./téléchargement.jpg" />
        <Card.Body>
        <Card.Title>Cyber-security</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
    </div>

      
    );
  }
  
  export default Cards1;
  