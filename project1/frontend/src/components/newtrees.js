import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Newtree(){
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    document.getElementById('body').style.backgroundImage="url('./hmoe.jpg')"
    const [Newtree,Setnewtree] = useState({
        'name':'',
        'details':'',
        'img':''
    })
    const nav = useNavigate()
    const Addnewtree=()=>{
        // e.preventDefault()
        const Addtree = new FormData()
        Addtree.append('name',Newtree.name)
        Addtree.append('details',Newtree.details)
        Addtree.append('img',Newtree.img)
        axios.post('http://localhost:7416/addtree',Addtree).then((response)=>{
            // alert(response.data.msg)
            // console.log(Addtree)
            
        })
        alert('inserted')
        // nav('/Trees')
        
    }
    return(
        <div>
            <form id="createnewaccount" onSubmit={Addnewtree}>
                <input className="newaccount" type="text" placeholder="Enter Tree Name" onChange={(e)=>Setnewtree({...Newtree,name:e.target.value})}/><br/><br/>
                <textarea className="textareainput" placeholder="Enter Tree Description" onChange={(e)=>Setnewtree({...Newtree,details:e.target.value})}/><br/><br/>
                <input className="fileinput" type="file" onChange={(e)=>Setnewtree({...Newtree,img:e.target.files[0]})}/><br/><br/>
                <button className="newaccountbtn" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Newtree;