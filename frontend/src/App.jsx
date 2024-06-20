import { useState } from 'react'
import CourseInfo from './Component/CourseInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseInfo/>
    </>
  )
}

export default App
