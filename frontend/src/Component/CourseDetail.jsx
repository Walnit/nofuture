import React from 'react'

export default function CourseDetail(props) {
    const lines = props.content.split("<br>");
  return (
    <div className="coursedetail-container">
      <div className="coursedetail-title">
        {props.title}
      </div>
      <div className="coursedetail-content">
        {lines.map((line, index) => (
            <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  )
}