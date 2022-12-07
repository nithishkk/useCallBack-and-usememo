import React from "react";

function CounterHook ({Count}){
  console.log("CounterHook is rendrung")
  return (
    <div>
      <h1> Counter hook is :     {Count}</h1>
      </div>
  )
}
export default CounterHook;