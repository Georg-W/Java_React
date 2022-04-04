import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TimeList from './components/TimeList';
import TimePost from './components/TimePost';



function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col sm={8}><TimeList/></Col>
                <Col sm={4}><TimePost/></Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
