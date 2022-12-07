import React from "react"

const Todo=({todos,addTodo})=>{
  console.log("todo is rending ")
  return (
<div>  
  {todos.map((todo,index)=>{
    return <p key={index}>{todo}</p>;
  })}
  <button onClick={addTodo}> ADD Tod </button>
  </div>
  )
}

export default React.memo(Todo)