import React from "react"

function Thumbnail(props){
    return <img src={props.image} alt={props.name} onClick={() => props.gameOn(props.id)} className="img-thumbnail col-lg-3 col-md-4 col-sm-6 mx-3 my-3" 
    style={{
        maxWidth: "200px",
        height: "200px",
        cursor: "pointer",
        boxShadow: "10px 10px 5px gray"
    }} />
}

export default Thumbnail