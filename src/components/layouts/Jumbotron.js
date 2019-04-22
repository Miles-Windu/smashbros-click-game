import React from "react"

function Jumbotron(){
    let divStyle = {
        width: "100%",
        height: "auto",
        background: "transparent",
        color: "yellow"
    }

    return <div className="jumbotron jumbotron-fluid mb-0" style={divStyle}>
    <div className="container-fluid" >
      <h1 className="text-center">Super Smash Bros Edition!</h1>
      <p className="lead text-center">Click through the characters. Don't click the same character twice or you'll lose!</p>
    </div>
  </div>
}

export default Jumbotron