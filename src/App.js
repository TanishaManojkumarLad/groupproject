import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Home';
import Food from './Food';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuBar/>
        <div>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound/>}/>
          </Routes>

        </div>
      </BrowserRouter>
    </div>

  );
}
 function Notfound() {
  return <div>Sorry, page not found!!</div>
 }

function MenuBar(){
 return (
<div>
          <Navbar  bg="dark" variant="dark">
            <Container>
              <Row>
                <Col xs={12}>
              <Nav variant="pills" defaultActiveKey="/">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/food">
                  <Nav.Link>Food</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
              </Nav>
              </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
 );
 

}

export default App;
