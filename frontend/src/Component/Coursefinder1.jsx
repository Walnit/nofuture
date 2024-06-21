import React, { useEffect, useRef } from "react";
import CourseQuiz from "./CourseQuiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Navbar";
import Container from "react-bootstrap/esm/Container";
import { FaRegCompass } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function CourseFinder1() {
 

  return (
    <>
      <Navbars />
     <br/>
         
    <Container fluid className="p-5  bg-light rounded-5" style={{   background: 'linear-gradient(100deg, #FFD47C  0%, #ABD3DA 100%)',top:'10px'}}>
      <Row className="justify-content-center text-center mb-3">
      <h2 className="text-sm-start text-lg-center text-xl-center"><span><FaRegCompass/></span> COURSE FINDER QUIZ </h2>
        <p className="text-sm-start text-lg-center text-xl-center">We’ll generate a ranked list of courses you may be most interested in!
To begin, watch the videos and select which field you prefer to work in.
Estimated time: 20 min</p>
      </Row>

      <Row className="justify-content-center align-items-center">
       
        <Col xs={12} md={12} lg={4} className="d-flex flex-column align-items-center pb-4">
          <iframe
        
            width="auto"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-2"
          ></iframe>
          <Button variant="light"><a href='http://localhost:5173/CourseQuiz'>SELECT</a></Button>

        </Col>
        
        <Col xs={12} md={12} lg={4} className="d-flex flex-column align-items-center">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-2"
          ></iframe>
          <Button variant="light"><a href='http://localhost:5173/CourseQuizLast'>SELECT</a></Button>
        </Col>
      </Row>    
      <br/>
      <Row className="justify-content-center align-items-center">
      <Col xs={3} lg={2} className="d-flex justify-content-center align-items-center">
      <a href='http://localhost:5173/CourseQuiz'>
          <IoChevronBackOutline size={50}  />
          </a>
      </Col>
      <Col xs={9} lg={9}>
   <ProgressBar now={20}/>
      </Col>
    </Row>

    </Container>

      
          </>
  );
}
