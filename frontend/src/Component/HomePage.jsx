import React, { useEffect, useRef } from "react";
import CourseQuiz from "./CourseQuiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Navbar";
import Container from "react-bootstrap/esm/Container";
import { FaRegCompass } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function HomePage() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Navbars />
      <br />
      <Container className="pb-5">
        <div className="text-sm-start text-lg-center text-xl-center">
          <h1>FORESIGHT</h1>
        </div>
        <h2 className="text-sm-start text-lg-center text-xl-center">Welcome to Foresight.</h2>
        <br />
        <div className="searchbar-container">
          <div className="searchbar">
            <button className="searchbar-button">
              <svg
                className="searchbar-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input
              className="searchbar-input"
              type="text"
              placeholder="SEARCH COURSES"
              ref={inputRef}
            />
          </div>
        </div>
        <br/>

        <Container fluid className="p-5 bg-light rounded-5" style={{   background: 'linear-gradient(100deg, #ABD3DA  0%, #FCB795 100%)'
}}>
      <Row className="justify-content-center text-center mb-3">
      <h2 className="text-sm-start text-lg-center text-xl-center"><span><FaRegCompass/></span> EXPLORE COURSES </h2>
        <p className="text-sm-start text-lg-center text-xl-center">Are you a prospective Poly, ITE, or tertiary student?</p>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100">POLY</Button>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100">ITE</Button>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100">UNI</Button>
        </Col>
      </Row>
    </Container>
    <br/>
<CourseQuiz/>
      </Container>
      
          </>
  );
}
