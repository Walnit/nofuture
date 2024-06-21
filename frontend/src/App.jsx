import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Component/HomePage';
import CourseQuiz from './Component/CourseQuiz';
import CourseFinder1 from './Component/Coursefinder1';
import CourseFinder2 from './Component/Coursefinder2';
import CoursefinderQuiz from './Component/CoursefinderQuiz';
import Navbars from './Component/Navbars';
import CourseDetail from './Component/CourseDetail';
import CourseSection from './Component/CourseSection';
import CourseList from './Component/Courselist';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="CourseList" element={<CourseList />} />
            <Route path="CourseQuiz" element={<CourseQuiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
