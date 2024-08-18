import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewForm(){
    const [newdata, setnewdata] = useState({
        'username':'',
        'password':'',
        'mail':'',
        'myfile':''
    })
    const nav = useNavigate()
    const Submitdata=(e)=>{
        if(newdata.username===""){
            alert('Enter Username')
        }else if(newdata.password===''){
            alert('Enter Password')
        }else if(newdata.mail===''){
            alert('Enter Mail')
        }else if(newdata.myfile===''){
            alert('Upload Your IMG')
        }else{
            e.preventDefault();
            const Inputfileds = new FormData()
            Inputfileds.append('username',newdata.username)
            Inputfileds.append('password',newdata.password)
            Inputfileds.append('mail',newdata.mail)
            Inputfileds.append('myfile',newdata.myfile)
            axios.post('http://localhost:7416/newdata',Inputfileds).then((result)=>{
                console.log(newdata)
                alert(result.data.msg)
            })
        }
    }
    return(
        <center>
            <form onSubmit={Submitdata}>
                <input type="text" name="username" placeholder="Enter UserName" onChange={(e)=>setnewdata({...newdata,username:e.target.value})}/><br/>
                <input type="password" name="password" placeholder="Enter Password" onChange={(e)=>setnewdata({...newdata,password:e.target.value})}/><br/>
                <input type="email" name="mail" placeholder="Enter Mail Id" onChange={(e)=>setnewdata({...newdata,mail:e.target.value})}/><br/>
                <input type="file" name="myfile" placeholder="Upload Your IMG" onChange={(e)=>setnewdata({...newdata,myfile:e.target.files[0]})}/><br/>
                <link></link><button>Submit</button>
            </form>
        </center>
    )
}
export default NewForm;