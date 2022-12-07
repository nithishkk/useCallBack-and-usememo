import React from "react"

export const Button=({handleIncrement})=>{
  console.log("button is rendring")
  return (
    <div>
    <button onClick={handleIncrement}>Incremnt</button>
      </div>
  )
}