import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"


function App() {
  const cardFilled = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })


  return (
    <div className="App">
      <Nav />
      <div className="card-countainer">
        {cardFilled}
      </div>
    </div>
  )
}

export default App
