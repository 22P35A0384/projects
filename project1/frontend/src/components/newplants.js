import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Newplants(){
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    document.getElementById('body').style.backgroundImage="url('./hmoe.jpg')"
    const [Newplant,Setnewplant] = useState({
        'name':'',
        'details':'',
        'img':''
    })
    const nav = useNavigate()
    const Addnewplant=()=>{
        // e.preventDefault()
        const Addplant = new FormData()
        Addplant.append('name',Newplant.name)
        Addplant.append('details',Newplant.details)
        Addplant.append('img',Newplant.img)
        axios.post('http://localhost:7416/addplant',Addplant).then((response)=>{
            // alert(response.data.msg)
            // console.log(Addplant)
            
        })
        alert('inserted')
        nav('/Plants')
        
    }
    return(
        <div>
            <form id="createnewaccount" onSubmit={Addnewplant}>
                <input className="newaccount" type="text" placeholder="Enter Plant Name" onChange={(e)=>Setnewplant({...Newplant,name:e.target.value})}/><br/><br/>
                <textarea className="textareainput" placeholder="Enter Plant Description" onChange={(e)=>Setnewplant({...Newplant,details:e.target.value})}/><br/><br/>
                <input className="fileinput" type="file" onChange={(e)=>Setnewplant({...Newplant,img:e.target.files[0]})}/><br/><br/>
                <button className="newaccountbtn" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Newplants;