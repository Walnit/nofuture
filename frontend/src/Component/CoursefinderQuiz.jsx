
import React, { useEffect, useRef } from "react";
import CourseQuiz from "./CourseQuiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Navbar";
import Container from "react-bootstrap/esm/Container";
import { FaRegCompass } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoChevronBackOutline } from "react-icons/io5";

import ProgressBar from 'react-bootstrap/ProgressBar';

export default function CoursefinderQuiz() {
  return (     
    <>   
  <Container fluid className="p-5 bg-light rounded-5" style={{   background: 'linear-gradient(100deg, #ABD3DA  0%, #FCB795 100%)'
}}>
      <Row className="justify-content-center text-center mb-3">
      <h2 className="text-sm-start text-lg-center text-xl-center"><span><FaRegCompass/></span> EXPLORE COURSES </h2>
        <p className="text-sm-start text-lg-center text-xl-center">Are you a prospective Poly, ITE, or tertiary student?</p>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100"><a href="http://localhost:5173/CourseInfo">POLY</a></Button>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100"><a href="http://localhost:5173/CourseInfo">ITE</a></Button>
        </Col>
        <Col xs={12} md={4} lg={2} className="mb-3 d-grid gap-2">
          <Button size="lg" variant="light" className="w-100"><a href="http://localhost:5173/CourseInfo">UNI</a></Button>
        </Col>
      </Row> 
      <br/>
      <Row className="justify-content-start align-items-center">
      <Col xs={3} lg={2} className="d-flex justify-content-center align-items-center">
        <IoChevronBackOutline size={50} />
      </Col>
      <Col xs={9} lg={9}>
        <ProgressBar now={10} color="#ABD3DA" />
      </Col>
    </Row>
    </Container>
   
    </>
  )
}
