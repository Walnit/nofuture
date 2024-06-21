import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';

function Navbars() {
  return (
    <>
      <br />
      <Navbar bg="transparent" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#features">CourseFinderQuiz</Nav.Link>
              <Nav.Link href="#pricing">Full Course List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
         
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
             
            autoFocus={true}
              type="text"
              placeholder="Search Course"
              className=" mr-sm-2"
            />
           
          </Col>
        
        </Row>
      </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
