import React from 'react'

export function List({ toDoList }) {
  return (
    <ul>
      {toDoList.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
