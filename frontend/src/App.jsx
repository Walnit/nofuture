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
    <ExperienceItem date="13 Mar" content="NYP Open House"/>
    <br />
    <ExperienceItem date="14 Mar" content="Pharmaceutical Conferences"/>
    <br />
    <ExperienceItem date="15 Mar" content="Dialogue Sessions by Industrial Experts, Networking Session"/>
    </>
  )
}

export default App
