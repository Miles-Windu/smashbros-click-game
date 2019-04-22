import React from "react"

function Footer(){
    let footerStyle = {
        color: "white",
        backgroundColor: "black",
        height: "100px",
        fontSize: "40px"
    }
    return <div className="container-fluid mx-0 p-3 " style={ footerStyle }>
    <footer className="bottom text-center">
    <p>How's Your Memory? *looks directly into camera*</p>
  </footer>
  </div>
}

export default Footer