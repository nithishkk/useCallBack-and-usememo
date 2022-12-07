import React from "react";
import Titel from './Titel'
import Button from './Button'
import CounterHook from './CountrHook'
import Todo from './Todo'
import "./style.css";

export default function App() {
  const[count,setCount]=React.useState(0);
  const[todos,setTodos]=React.useState([])
  const handleIncrement=React.useCallback(()=>{
    setCount((count)=>count+1)
  },[count])
  const addTodo=React.useCallback(()=>{
    setTodos((t)=>[...t, "New Todo Item"]);
  },[todos])
  return (
    <div>
      <Titel/>
      <CounterHook Count={count}/>
      <hr/>
      <Button handleIncrement={handleIncrement}/>
      <hr/>
      <Todo todos={todos} addTodo={addTodo}/>
    </div>
  );
}
