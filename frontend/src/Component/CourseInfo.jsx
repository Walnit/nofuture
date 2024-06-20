import React from 'react'
export default function CourseInfo({content1, title, subtitle}) {
  return (
  <>
  <div style={{padding:'20px'}}>
    <p>{content1}<span style={{color:'#2400FF'}}>{title}</span></p>
    <p style={{background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)"}}><h1>{title} </h1></p>
    <p>{subtitle}</p>
    </div>
      </>
  )
}
