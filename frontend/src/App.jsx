import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'
import ExperienceItem from './Component/ExperienceItem'
import Middlesections from './Component/Middlesections'
import './App.css'
import HomePage from './Component/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    </>
  )
}

export default App
