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
<CourseQuiz/>
      
          </>
  );
}
