import React from 'react'

export function Form({ inputText, setText, addToDo, toDoList }) {
  return (
    <form>
      <input value={inputText} onChange={e => setText(e.target.value)} />
      <input
        type="submit"
        onClick={e => {
          e.preventDefault()
          addToDo([...toDoList, inputText])
        }}
      ></input>
    </form>
  )
}
