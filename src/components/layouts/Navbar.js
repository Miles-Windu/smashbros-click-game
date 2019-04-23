import React from "react"

function Navbar(props){
    return <nav className="navbar sticky-top" onClick={() => props.gameOn(props.id)}
    style={{
        backgroundColor: "black",
        color: "white", 
    }}>
    <h2 className="col-3 text-center" >Clicky Game!</h2>
    <h2 className="col-3 text-center" > {props.status} </h2>
    <h2 className="col-3 text-center" >Score: {props.count} | Top Score: {props.topScore}</h2>
  </nav>
}

export default Navbar