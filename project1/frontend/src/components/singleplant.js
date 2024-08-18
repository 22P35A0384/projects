import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Singleplant(){
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const [singleplant, setsingleplant] = useState([])
    const {id} = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:7416/singleplant/'+id).then((response)=>{
            setsingleplant(response.data.single)
            // console.log({singleplant})
        })
    },[])
    return(
        <div id="singledata">
            <div id="imgdiv">
                <img src={`http://localhost:7416/img/${singleplant.profile}`} alt={singleplant.name}/>
            </div>
            <div id="textareadiv" style={{float:'right',width:'400px'}}>
                <div style={{background:'white',padding:'15px',borderRadius:'10px'}}>
                    <h2 style={{color:'red'}}>{singleplant.name}</h2>
                    <h6>{singleplant.details}</h6>
                </div>
                <button id="loginbutton" onClick={()=>nav('/Plants')}>Return</button>
            </div>
            <div id="ptag">
                <p>{singleplant.details}</p>
            </div>
        </div>
    )
}

export default Singleplant;