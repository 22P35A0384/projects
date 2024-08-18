import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewAccount(){
    const imageref = useRef(null)
    const [image, setimg] = useState('')
    const changeimg = () =>{
        imageref.current.click()
    }
    document.getElementById('body').style.backgroundImage="url('./background.jpg')"
    let [newuser, getnewuser] = useState({
        'fname':'',
        'lname':'',
        'password':'',
        'email':'',
        'cnfpass':'',
        'myimg':''
    })
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            // console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    },[]);
    const [upper, setupper] = useState(0)
    const [lower, setlower] = useState(0)
    const [spc, setspc] = useState(0)
    const [num, setnum] = useState(0)
    const [len, setlen] = useState(0)
    const sp = "~@`!#$%^&*+=-[]()_.';,/{}|\":<>?";
    const checkpass = (e) => {
        var upper = 0;
        var lower = 0;
        var spc = 0;
        var num = 0;
        var x = e.target.value;
        for (var i=0;i<x.length;i++){
            if(x[i]===x[i].toUpperCase() && isNaN(x[i]) && !(sp.includes(x[i]))){
                upper+=1;
            }else if(x[i]===x[i].toLowerCase() && isNaN(x[i]) && !(sp.includes(x[i]))){
                lower++;
            }else if(sp.includes(x[i])){
                spc++;
            }else{
                num++;
            }
        }
        setupper(upper)
        setlower(lower)
        setspc(spc)
        setnum(num)
        setlen(x.length)
        // console.log(upper)
        // console.log(lower)
        // console.log(spc)
        // console.log(num)
        // console.log(x)
    }
    const [otp,setnewotp] = useState(0)
    const Nav = useNavigate()
    let otp1 = '';
    let otp2 = '';
    let otp3 = '';
    let otp4 = '';
    let otp5 = '';
    let otp6 = '';
    // let userotp = [otp1,otp2,otp3,otp4,otp5,otp6]
    const Otpfun=(e)=>{
        console.log(otp1,otp2,otp3,otp4,otp5,otp6)
        otp1 = String(otp1)
        otp2 = String(otp2)
        otp3 = String(otp3)
        otp4 = String(otp4)
        otp5 = String(otp5)
        otp6 = String(otp6)
        let userotp = [otp1,otp2,otp3,otp4,otp5,otp6]
        e.preventDefault()
        const newotp = String(otp)
        console.log(newotp)
        let c = 0
        for(var i=0;i<6;i++){
            if(newotp[i]===userotp[i]){
                c++;
            }
        }
        if(c==6){
            const Senddata = new FormData()
            Senddata.append('fname',newuser.fname)
            Senddata.append('lname',newuser.lname)
            Senddata.append('password',newuser.password)
            Senddata.append('email',newuser.email)
            Senddata.append('myimg',newuser.myimg)
            axios.post('http://localhost:7416/addnewuser',Senddata).then((result)=>{
                alert(result.data.msg)
                Nav('/login')
            })
        }else{
            alert('Invalid OTP')
        }
    }
    const Createuser=(e)=>{
        if(newuser.fname===''){
            e.preventDefault()
            alert('Enter Your First Name')
        }else if(newuser.lname===''){
            e.preventDefault()
            alert('Enter Your Last Name')
        }else if(newuser.email===''){
            e.preventDefault()
            alert('Enter Your Mail')
        }else if(newuser.password===''){
            e.preventDefault()
            alert('Create New Password')
        }else if(newuser.password===''){
            e.preventDefault()
            alert('Create New Password')
        }else if(newuser.cnfpass===''){
            e.preventDefault()
            alert('Re-enter Your Password To Conform')
        }else if(newuser.password!==newuser.cnfpass){
            e.preventDefault()
            alert('Password Mismatch')
        }else if(newuser.myimg===''){
            e.preventDefault()
            alert('Set Your Profile')
        }else if(upper===0){
            e.preventDefault()
            alert('Password Must Contain One Captal Letter')
        }else if(lower===0){
            e.preventDefault()
            alert('Password Must Contain One Lower Letter')
        }else if(spc===0){
            e.preventDefault()
            alert('Password Must Contain One Special Character')
        }else if(num===0){
            e.preventDefault()
            alert('Password Must Contain One Number')
        }else if(len<8){
            e.preventDefault()
            alert('Password Must Contain Atleast 8 Characters')
        }else{
            let c = 0
            users.map((ele)=>{
                if(ele.email===newuser.email){
                    c+=1
                }
            })
            // console.log(c)
            if(c==0){
                document.getElementById('otpblock').style.display = 'block'
                // document.getElementsByClassName('newaccountbtn').style.display = 'none'
                // Nav('/otpwindow')
                e.preventDefault()
                const mail = newuser.email
                // console.log(mail)
                axios.get('http://localhost:7416/getotp/'+mail).then((response)=>{
                    // console.log(mail)
                    const newotp = (response.data.otp)
                    setnewotp(newotp)
                })
            }else{
                alert('This Email Was Already Registered..!')
            }
        }
    }
    return(
        <>
            <form style={{paddingBottom:'70px'}} id="createnewaccount" onSubmit={Createuser}>
                <input className="fileinput" type="file" ref={imageref} onChange={(e)=>getnewuser({...newuser,myimg:e.target.files[0]},setimg(e.target.files[0]))}/><br/><br/>
                {image ? <img onClick={changeimg} style={{position:'relative'}} id="editimg" src={URL.createObjectURL(image)} alt="profileImg"/> : <img onClick={changeimg} style={{position:'relative'}} id="editimg" src={"http://localhost:7416/img/null.png"} alt="profileImg"/>}
                <input className="newaccount" type="text" placeholder="Enter Your First Name" onChange={(e)=>getnewuser({...newuser,fname:e.target.value})}/><br/><br/>
                <input className="newaccount" type="text" placeholder="Enter Your Last Name" onChange={(e)=>getnewuser({...newuser,lname:e.target.value})}/><br/><br/>
                <input className="newaccount" type="email" placeholder="Enter Your Mail" onChange={(e)=>getnewuser({...newuser,email:e.target.value})}/><br/><br/>
                <input className="newaccount" type="password" placeholder="Enter A Password" onChange={(e)=>getnewuser({...newuser,password:e.target.value},checkpass(e))}/><br/><br/>
                <input className="newaccount" type="password" placeholder="Conform Password" onChange={(e)=>getnewuser({...newuser,cnfpass:e.target.value})}/><br/><br/>
                <button className="newaccountbtn" style={{position:'relative',top:'40px'}}  type="submit">Create Account</button>
            </form>
            <div id="otpblock">
                <div id="otpwindow">
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp1=e.target.value}} />
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp2=e.target.value}}/>
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp3=e.target.value}}/>
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp4=e.target.value}}/>
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp5=e.target.value}}/>
                    <input className="otpinput" maxLength={1} onChange={(e)=>{otp6=e.target.value}}/><br/>
                    <button onClick={Otpfun} className="otpbtn">SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default NewAccount;