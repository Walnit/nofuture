import React from 'react'

export default function ExperienceItem(props) {
  return (
    <div class="exp-container">
      <div class="exp-date">
        {props.date}
      </div>
      <div class="exp-content">
        {props.content}
      </div>
    </div>
  )
}
