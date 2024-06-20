import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'
import ReviewCard from './Component/ReviewCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo/>
    <ExperienceItem />
    <ReviewCard rating={5} name="Ronnie Tan, NYP" content="Great course! Would highly reccomend to future students." />
    </>
  )
}

export default App
