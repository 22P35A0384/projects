import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgotpassword(){
    document.getElementById('body').style.backgroundImage="url('./main.jpg')"
    const nav = useNavigate()
    const [Data,Setdata] = useState({
        'email':'',
        'newpass':'',
        'cnfnewpass':''
    })
    const Resetpassword=(e)=>{
        if(Data.email===""){
            e.preventDefault()
            alert('Enter Your Email')
        }else if(Data.newpass===''){
            e.preventDefault()
            alert('Create A New Password')
        }else if(Data.cnfnewpass===''){
            e.preventDefault()
            alert('Re-Enter Your New Password')
        }else if(Data.newpass!=Data.cnfnewpass){
            e.preventDefault()
            alert('Password Mismatch')
        }else{
            e.preventDefault()
            axios.get('http://localhost:7416/getotp/'+Data.email).then((response)=>{
                const newotp = (response.data.otp)
                let otp = prompt('Enter OTP sent to your mail')
                if(otp==null){
                    alert('Invalid OTP')
                    window.location.reload()
                }else{
                    if(newotp==otp){
                        axios.get('http://localhost:7416/mail/'+Data.email).then((response)=>{
                            const {_id,password} = (response.data.maildata)
                            const update = {
                                'password':`${Data.newpass}`
                            }
                            e.preventDefault()
                            axios.put('http://localhost:7416/updatepass/'+_id,{update}).then((result)=>{
                                alert(result.data.msg)
                                nav('/login')
                            })
                        })
                    }else{
                        alert('Invalid OTP')
                        window.location.reload()
                    }
                }
            })
            // alert('Success')
            
        }
    }
    return(
        <div id="loginblock">
            <input id="loginblock2" type="email" placeholder="Enter Your Email" onChange={(e)=>Setdata({...Data,email:e.target.value})}/><br/><br/>
            <input id="loginblock2" type="password" placeholder="Enter A New Password" onChange={(e)=>Setdata({...Data,newpass:e.target.value})}/><br/><br/>
            <input id="loginblock2" type="password" placeholder="Re-Enter Your New Password" onChange={(e)=>Setdata({...Data,cnfnewpass:e.target.value})}/><br/><br/>
            <button id="loginbutton1" style={{marginBottom:'20px'}} onClick={(e)=>Resetpassword(e)}>Reset Password</button>
        </div>
    )
}

export default Forgotpassword;