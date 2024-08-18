import React from "react";
import Myimg from "./22P35A0384.jpg"

class Img extends React.Component{
    render(){
        return(
            <>
                <h1>This Is Img Tag</h1>
                <img id="myimg" src={Myimg} alt="gangadhar" style={{width:'280px',height:'300px'}}/>
                <img src='logo512.png' alt="Logo"/>
            </>
        )
    }
}

export default Img;
