import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo/>
    <ExperienceItem date="13 Mar" content="NYP Open House"/>
    <br />
    <ExperienceItem date="14 Mar" content="Pharmaceutical Conferences"/>
    <br />
    <ExperienceItem date="15 Mar" content="Dialogue Sessions by Industrial Experts, Networking Session"/>
    </>
  )
}

export default App
