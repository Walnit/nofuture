import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'
import Middlesections from './Component/Middlesections'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo
    content1={"Home > Diploma Courses> Natural, Physical, Chemical & Mathematical Sciences >" }
    title={"Pharmaceutical Science"}
    subtitle={"Learn the biology and chemistry behind creating new drugs and medicines."}
    />
    <Middlesections/>
    
    </>
  )
}

export default App
