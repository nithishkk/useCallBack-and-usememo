import React from "react"

 const Button=({handleIncrement})=>{
  console.log("button is rendring")
  return (
    <div>
    <button onClick={handleIncrement}>Incremnt</button>
      </div>
  )
}
export default React.memo(Button)