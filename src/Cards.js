import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function Cards() {
    return (
     <div className='main'>   
     <div className="Cards">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./téléchargement.jpg" />
        <Card.Body>
        <Card.Title>E-LEARNING</Card.Title>
        <Card.Text>
        Le e-learning est un type de formation en ligne et à distance qui utilise Internet et les nouvelles technologies digitales, dans le but d’améliorer les processus d’apprentissage.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
    <div className="Cards1">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./téléchargement.jpg" />
        <Card.Body>
        <Card.Title>Cyber-security</Card.Title>
        <Card.Text>
        La cybersécurité consiste à protéger les ordinateurs, les serveurs, les appareils mobiles, les systèmes électroniques, les réseaux et les données contre les attaques malveillantes.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
    <div className="Cards2">
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./téléchargement.jpg" />
        <Card.Body>
        <Card.Title>Full-STACK</Card.Title>
        <Card.Text>
        Full stack fait référence à toute la profondeur d’une application système informatique, et les développeurs full stack chevauchent deux domaines de développement Web distincts.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
    </div>

      
    );
  }
  
  export default Cards;
  