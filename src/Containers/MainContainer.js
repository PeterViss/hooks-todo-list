import React, { useState } from 'react'
import { List } from '../Components/List'
import { Form } from '../Components/Form'
const MainContainer = () => {
  const [inputText, setText] = useState('')
  const [toDoList, addToDo] = useState([])
  return (
    <>
      <div>To Do List</div>
      <Form
        inputText={inputText}
        setText={setText}
        addToDo={addToDo}
        toDoList={toDoList}
      />
      <List toDoList={toDoList} />
    </>
  )
}

export default MainContainer
