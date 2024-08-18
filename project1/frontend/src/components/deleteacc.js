import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"

function DeleteAcc(){
    const Nav = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const [conform,setconform] = useState({
        'mail':'',
        'pass':''
    })
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [databymail, setdatabymail] = useState([])
    const id = localStorage.getItem('user')
    useEffect(()=>{
        axios.get('http://localhost:7416/getdatabyemail/'+id).then((response)=>{
            setdatabymail(response.data.logindata)
            // console.log(databymail.username)
        })
    },[])
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    const Delete=()=>{
        if(!conform.mail){
            alert('Enter Your Email')
        }else if(!conform.pass){
            alert('Enter Your Password')
        }else if(conform.mail!==databymail.email){
            alert('Invalid Mail!')
        }else if(conform.pass!==databymail.password){
            alert('Invalid Password!')
        }else{
            axios.delete('http://localhost:7416/deleteacc/'+id).then((response)=>{
                alert(response.data.msg)
                Nav('/logout')
            })
        }
    }
    return(
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div class="logo-details">
                    <div class="logo_name">Plants And Trees</div>
                    <i class='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
                </div>
                <div class="profile">
                    <div class="profile-details">
                        <img src={`http://localhost:7416/img/${databymail.profile}`} alt="profileImg"/><br/><br/>
                        <div class="name_job">
                            <div class="name">{databymail.fname}  {databymail.lname}</div>
                            <div class='logout' onClick={()=>{Gotologin()}}>LOGOUT</div>
                        </div>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="/home" className="navtext">
                            <i class='bx bx-home-alt-2'></i>
                            <span className="navspan">HOME</span>
                        </a>
                    </li>
                    <li>
                        <a href="/plants" className="navtext">
                            <i class='bx bx-leaf'></i>
                            <span className="navspan">PLANTS</span>
                        </a>
                    </li>
                    <li>
                        <a href="/trees" className="navtext">
                            <i class='bx bxs-tree' style={{color:'white'}}></i>
                            <span className="navspan">TREES</span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="navtext">
                            <i class='bx bxs-phone-call'></i>
                            <span className="navspan">CONTACT</span>
                        </a>
                    </li>
                    <li>
                        <a href="/changepassword" className="navtext">
                            <i class='bx bxs-cog'></i>
                            <span className="navspan">SETTINGS</span>
                        </a>
                    </li>
                    <li>
                        <i class='bx bx-log-out' id="log_out" onClick={()=>{Gotologin()}}></i>
                    </li>
                </ul>
            </div>
            <div>
                <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                <Link to={'/deleteaccount'}><button style={{backgroundColor:'red'}} id="navbtn">DELETE ACCOUNT</button></Link>
            </div>
            <div id="loginblock" style={{position:'relative',top:'150px',left:'900px',paddingBottom:'50px'}}>
                <h4 style={{position:'relative',top:'25px'}}>DELETE ACCOUNT</h4>
                <hr style={{position:'relative',left:'18px',top:'20px'}} id="hr"/>
                <input id="loginblock2" type="email" placeholder="Enter Your Mail Id" onChange={(e)=>setconform({...conform,mail:e.target.value})}/><br/><br/>
                <input id="loginblock2" type="password" placeholder="Enter Your Password" onChange={(e)=>setconform({...conform,pass:e.target.value})}/><br/><br/>
                <button id="loginbutton1" onClick={()=>Delete()} >SUBMIT</button><br/>
            </div>
        </div>
    )
}

export default DeleteAcc;