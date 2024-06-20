import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo/>
    <ExperienceItem />
    </>
  )
}

export default App
