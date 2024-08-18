import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Navigationsettings } from "./navigation copy 2";
import React from 'react';

function DeleteAcc(){
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/space1.webp')";
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
    const [conform,setconform] = useState({
        'mail':'',
        'pass':''
    })
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const id = localStorage.getItem('user')
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const Delete=()=>{
        if(!conform.mail){
            alert('Enter Your Email')
        }else if(!conform.pass){
            alert('Enter Your Password')
        }else{
            axios.post('https://space-club.onrender.com/deleteuser',conform).then((res)=>{
                if(res.data===1){
                    alert('Invalid Password')
                }else if(res.data===2){
                    alert('Invalid Mail')
                }else{
                    alert('Your Account Deleted Sucessfully')
                    Nav('/logout')
                }
            })
        }
    }
    return(
        <div>
            <Navigationsettings />
            <div id="editprofile">
                <div id="settingsbtns" style={{top:'500px'}}>
                    <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button style={{backgroundColor:'red'}} id="navbtn">DELETE ACCOUNT</button></Link>
                </div>
                <div id="loginblock" style={{paddingTop:'20px'}}>
                    <h4>DELETE ACCOUNT</h4>
                    <hr style={{marginTop:'-25px'}} id="hr"/>
                    <input id="loginblock2" type="email" placeholder="Enter Your Mail Id" onChange={(e)=>setconform({...conform,mail:e.target.value})}/><br/><br/>
                    <input id="loginblock2" type="password" placeholder="Enter Your Password" onChange={(e)=>setconform({...conform,pass:e.target.value})}/><br/><br/>
                    <button style={{marginBottom:'25px'}} id="loginbutton1" onClick={()=>Delete()} >SUBMIT</button><br/>
                </div>
            </div>
        </div>
    )
}

export default DeleteAcc;