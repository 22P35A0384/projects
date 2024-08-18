import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function EditForm(){
    const [formdata, setFormdata] = useState({
        'username':'',
        'password':'',
        'mail':'',
        'myfile':''
    })
    const {id} = useParams()
    const [path,setpath] = useState('')
    // let api = 'http://localhost:7416/getuserdata/'+id;
    useEffect(()=>{
        axios.get('http://localhost:7416/getuserdata/'+id).then((response)=>{
            console.log(response.data.userdata)
            setFormdata(response.data.userdata);
            setpath(response.data.path);
        })
    },[]);
    const Submitdata=(e)=>{
        if(formdata.username===''){
            alert('Enter User Name')
        }else if(formdata.password===''){
            alert('Enter Your Password')
        }else if(formdata.mail===''){
            alert('Enter Your Mail ID')
        }else{
            e.preventDefault();
            // console.log(formdata)
            axios.put('http://localhost:7416/editform/'+id,{formdata}).then((result)=>{
                alert(result.data.msg)
            })
        }
        // axios.post('http://localhost:7416/adddata').then((result)=>console.log('result.data'))
    }
    return(
        <>
            <form onSubmit={Submitdata} id="form1">
                <input type="text" name="username" placeholder="User Name" value={formdata.username} onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/><br/><br/>
                <input type="text" name="password" placeholder="password" value={formdata.password} onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/><br/><br/>
                <input type="email" name="mail" placeholder="Your Mail Id" value={formdata.mail} onChange={(e)=>setFormdata({...formdata,mail:e.target.value})}/><br/><br/>
                <p style={{background:'white'}}>{path}</p><br/><br/>
                <img src={path} alt="My Profile Img"/><br/><br/>
                {/* <select name='course' value={formdata.course} onChange={(e)=>setFormdata({...formdata,course:e.target.value})}>
                    <option>select course</option>
                    <option>FSD</option>
                    <option>AWS</option>
                    <option>Google Devops</option>
                    <option>Asure Devops</option>
                    <option>Google Flutter</option>
                </select><br/><br/> */}
                <button type="submit" style={{margin:'10px'}}>Update</button>
                <input type="reset" value='Reset'/>
            </form>
        </>
    )
}

export default EditForm;