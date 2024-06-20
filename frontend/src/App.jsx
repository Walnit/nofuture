import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'
import Middlesections from './Component/Middlesections'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo/>
    <Middlesections/>
    </>
  )
}

export default App
