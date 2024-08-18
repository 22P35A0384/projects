import { Link ,useNavigate} from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import axios from "axios";
import { Navigationsettings } from "./navigation copy 2";
import React from 'react';

function Editprofile(){
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/space1.webp')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const Nav = useNavigate();
    const id = localStorage.getItem('user');
    const [databymail, setdatabymail] = useState([]);
    const imageref = useRef(null)
    const [image, setimage] = useState('');
    const changeimg=()=>{
        imageref.current.click();
    }
    const [editdata, seteditdata] = useState({
        'fname': '',
        'lname': '',
        'email': '',
        'myimg': '',
        'changedimg': ''
    });

    useEffect(() => {
        const id = localStorage.getItem('user')
        console.log(id)
        axios.get(`https://space-club.onrender.com/getdata/${id}`).then((response) => {
            const data = response.data;
            // console.log(data)
            setdatabymail(data);
            seteditdata({
            'fname': data.fname,
            'lname': data.lname,
            'email': data.email,
            'changedimg': data.profile
            });
        });
    }, [Nav, id]);
    // console.log(editdata.myimg)
    const Savedata = () => {
        if(!editdata.myimg){
            axios.put(`https://space-club.onrender.com/editdata/${id}`,editdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
        }else{
            const neweditdata = new FormData()
            neweditdata.append('fname',editdata.fname)
            neweditdata.append('lname',editdata.lname)
            neweditdata.append('email',editdata.email)
            neweditdata.append('myimg',editdata.myimg)
            axios.put(`https://space-club.onrender.com/editdataimg/${id}`,neweditdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
            // console.log(editdata.myimg)
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return(
        <div>
            <Navigationsettings />
            <div id="editprofile">
                <div id="settingsbtns">
                    <Link to={'/editprofile'}><button style={{backgroundColor:'red'}} id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button id="navbtn">DELETE ACCOUNT</button></Link>
                </div>
                <div id="loginblock">
                    <div id="editimgdiv">{image ? <img onClick={changeimg} id="editimg" src={URL.createObjectURL(image)} alt="profile img"/> : <img id="editimg" onClick={changeimg} src={`https://space-club.onrender.com/profile/${editdata.changedimg}`} alt="profileImg"/>}</div><br/>
                    <input id="loginblock1" value={editdata.fname} type="text" placeholder="Enter Your First Name" onChange={(e)=>seteditdata({...editdata,fname:e.target.value})}/><br/><br/>
                    <input id="loginblock1" value={editdata.lname} type="text" placeholder="Enter Your Last Name" onChange={(e)=>seteditdata({...editdata,lname:e.target.value})}/><br/><br/>
                    <input id="loginblock1" value={editdata.email} type="email" placeholder="Enter Your Mail" onChange={(e)=>seteditdata({...editdata,email:e.target.value})}/><br/><br/>
                    <input style={{display:'none'}} className="fileinput" type="file" ref={imageref} onChange={(e)=>seteditdata({...editdata,myimg:e.target.files[0]},setimage(e.target.files[0]))}/><br/><br/>
                    <button id="loginbutton" onClick={()=>Savedata()}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Editprofile;