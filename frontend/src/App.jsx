import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'
import Middlesections from './Component/Middlesections'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Component/HomePage'
import CourseQuiz from './Component/CourseQuiz'
import CourseFinder1 from './Component/Coursefinder1'
import CourseFinder2 from './Component/Coursefinder2'
import CoursefinderQuiz from './Component/CoursefinderQuiz'
import Navbars from './Component/Navbar'
import CourseDetail from './Component/CourseDetail'
import CourseSection from './Component/CourseSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseSection/>
    </>
  )
}

export default App
