import axios from "axios";
import { useState } from "react";

function Form(){
    const [formdata, setFormdata] = useState({
        'username':'',
        'password':'',
        'mail':'',
        'course':''
    })
    const Submitdata=(e)=>{
        if(formdata.username===''){
            alert('Enter User Name')
        }else if(formdata.password===''){
            alert('Enter Your Password')
        }else if(formdata.mail===''){
            alert('Enter Your Mail ID')
        }else if(formdata.course===''){
            alert('Select Your Course')
        }else{
            e.preventDefault();
            console.log(formdata)
            axios.post('http://localhost:7416/adduser',{formdata}).then((result)=>{
                alert(result.data.msg)
            })
        }
        // axios.post('http://localhost:7416/adddata').then((result)=>console.log('result.data'))
    }
    return(
        <>
            <form onSubmit={Submitdata} id="form1">
                <input type="text" name="username" placeholder="User Name" onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/><br/><br/>
                <input type="password" name="password" placeholder="Password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/><br/><br/>
                <input type="email" name="mail" placeholder="Your Mail Id" onChange={(e)=>setFormdata({...formdata,mail:e.target.value})}/><br/><br/>
                <select name='option' onChange={(e)=>setFormdata({...formdata,course:e.target.value})}>
                    <option>select course</option>
                    <option>FSD</option>
                    <option>AWS</option>
                    <option>Google Devops</option>
                    <option>Asure Devops</option>
                    <option>Google Flutter</option>
                </select><br/><br/>
                <button type="submit" style={{margin:'10px'}}>Submint</button>
                <input type="reset" value='Reset'/>
            </form>
        </>
    )
}

export default Form;