import React, { useState } from 'react'

const MainContainer = () => {
  const [inputText, setText] = useState()

  return (
    <>
      <div>To Do List</div>
      <form>
        <input value={inputText} />
      </form>
    </>
  )
}

export default MainContainer
