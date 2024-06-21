import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import HomePage from './Component/HomePage';
import CourseQuiz from './Component/CourseQuiz';
import CourseList from './Component/Courselist';
import CourseFinder1 from './Component/Coursefinder1';
import Navbars from './Component/Navbar';
import CoursefinderQuiz from './Component/CoursefinderQuiz';
import CourseInfo from './Component/CourseInfo';
import CourseActualInfo from './Component/CourseActualInfo';

function App() {
  const [count, setCount] = useState(0);
  return (
    <> 
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path="/" element={<HomePage/>} />
            <Route path='CourseFinder' element={<CourseFinder1/>}/>
            <Route path='CourseInfo' element={<CourseActualInfo/>}/>

             <Route path='CourseQuizLast' element={<CoursefinderQuiz/>}/>
            <Route path="CourseList" element={<CourseList />} />
            <Route path="CourseQuiz" element={<CourseQuiz />} />
        </Routes>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
