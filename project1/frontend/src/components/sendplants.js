import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Sendplants(){
    const Nav = useNavigate()
    const [databymail, setdatabymail] = useState([])
    const id = localStorage.getItem('user')
    useEffect(()=>{
        axios.get('http://localhost:7416/getdatabyemail/'+id).then((response)=>{
            setdatabymail(response.data.logindata)
            // console.log(databymail.username)
        })
    },[])
    if(databymail.admin==='yes'){
        Nav('/plantadmin')
    }else{
        Nav('/plantuser')
    }
}

export default Sendplants;