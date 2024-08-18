import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Navigationhome } from "./navigation copy";
import React from 'react';

function Projects(){
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/whitebg.jpg')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    const Nav = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    return(
        <div>
            <Navigationhome />
            <div style={{paddingTop:'4%', textAlign:'center'}}>
                {/* <div style={{textAlign:'center'}}>
                    <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button style={{backgroundColor:'red'}} id="navbtn">DELETE ACCOUNT</button></Link>
                </div> */}
                <button id="loginbtn" onClick={(e)=>{Nav('/addnewproject')}} style={{marginTop:'3%',width:'auto',paddingLeft:'1%',paddingRight:'1%'}}>ADD NEW PROJECT</button>
            </div>
        </div>
    )
}

export default Projects;