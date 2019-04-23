import React from "react"

function Jumbotron(){
    let divStyle = {
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        color: "Red",
        borderRadius: "2000px",
        opacity: ".7"
    }

    return <div className="container mt-1 p-5" >
    <div className="jumbotron" style={divStyle} >
      <h1 className="text-center">Super Smash Bros Edition!</h1>
      <p className="lead text-center">Click through the characters. Don't click the same character twice or you'll lose!</p>
    </div>
  </div>
}

export default Jumbotron