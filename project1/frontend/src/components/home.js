import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Import useRef for the content area ref
import axios from "axios";

function Home() {
    document.getElementById('body').style.backgroundColor='black'
    const Nav = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
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
    const [subscribe,setsubscribe] = useState({
        'subscribemail':''
    })
    const Sendmail=()=>{
        axios.post('http://localhost:7416/subscribe',subscribe).then((responce)=>{
            // alert(subscribe.subscribemail)
            alert(responce.data.msg)
            window.location.reload()
        })
    }
    const Navplants = ()=>{
        Nav('/plants')
    }
    return (
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
                        <a href="/editprofile" className="navtext">
                            <i class='bx bxs-cog'></i>
                            <span className="navspan">SETTINGS</span>
                        </a>
                    </li>
                    <li>
                        <i class='bx bx-log-out' id="log_out" onClick={()=>{Gotologin()}}></i>
                    </li>
                </ul>
            </div>
            <div className="img1">
                <h1 className="mainh1">Welcome To Plants And Treess</h1>
            </div>
            <div className="img2">
                <div style={{backgroundImage:"url('http://localhost:7416/img/indoorplants.jpg')",backgroundSize:'cover',boxShadow:'1px 1px 20px black',cursor:'pointer'}} className="sidedivs">
                    <div id="subdiv">
                        <div id="subdiv1">
                            <h3 style={{fontFamily:'cursive',position:'relative',top:'60px',color:'red',textShadow:'1px 1px 5px white',fontWeight:'bold'}}>Indoor Plants</h3>
                            <p style={{position:'relative',top:'70px',padding:'15px',color:'gold',fontWeight:'bold',textShadow:'1px 1px 5px black'}}>
                                Indoor plants not only enhance the aesthetic appeal of your living spaces but also contribute to a healthier indoor environment.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:"url('http://localhost:7416/img/outdoor.jpg')",backgroundSize:'cover',boxShadow:'1px 1px 20px black',cursor:'pointer'}} className="sidedivs">
                    <div id="subdiv">
                        <div id="subdiv1">
                            <h3 style={{fontFamily:'cursive',position:'relative',top:'60px',color:'red',textShadow:'1px 1px 5px white',fontWeight:'bold'}}>Outdoor Plants</h3>
                            <p style={{position:'relative',top:'70px',padding:'15px',color:'gold',fontWeight:'bold',textShadow:'1px 1px 5px black'}}>
                                Outdoor plants are essential elements of garden landscapes, providing beauty, shade, and environmental benefits
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:"url('http://localhost:7416/img/tree.jpg')",backgroundSize:'cover',boxShadow:'1px 1px 20px black',cursor:'pointer'}} className="sidedivs">
                    <div id="subdiv">
                        <div id="subdiv1">
                            <h3 style={{fontFamily:'cursive',position:'relative',top:'60px',color:'red',textShadow:'1px 1px 5px white',fontWeight:'bold'}}>Ganden Trees</h3>
                            <p style={{position:'relative',top:'70px',padding:'15px',color:'gold',fontWeight:'bold',textShadow:'1px 1px 5px black'}}>
                                Garden trees are pivotal components of outdoor landscapes, offering a vertical dimension, shade, and a sense of permanence to gardens
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img3"></div>
            <div className="img4">
                <div style={{float:'right'}}>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6882387961264!2d82.06604177470437!3d17.08789571136477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e184e8c2cd%3A0xcf5255f5f8e1483c!2sTechnical%20Hub!5e0!3m2!1sen!2sin!4v1699941911301!5m2!1sen!2sin"></iframe>
                </div>
                <div style={{float:'left',textAlign:'left',position:'relative',left:'300px',top:'80px'}}>
                    <h4 style={{paddingBottom:'10px',color:'white'}}>GET IN TOUCH</h4>
                    <span><i style={{color:'white',position:'relative',top:'2px'}} class='bx bx-envelope'></i></span>  <h6 style={{paddingBottom:'10px',color:'white',display:'inline'}}>saigangadharsgk@gmail.com</h6><br/>
                    <span><i style={{color:'white',position:'relative',top:'2px'}} class='bx bx-phone'></i></span> <h6 style={{paddingBottom:'10px',color:'white',display:'inline'}}>+917396376944</h6>
                    <p style={{paddingBottom:'10px',color:'white'}}>To get latest news & updates and special promotions.</p>
                    <input style={{paddingBottom:'10px'}} className="emailinput" type="email" placeholder="Email Address" onChange={(e)=>setsubscribe({...subscribe,subscribemail:e.target.value})}/><button onClick={()=>Sendmail()} className="emailbtn">Subscribe</button><br/>
                    <div style={{textAlign:'center'}}>
                        <a href="https://www.linkedin.com/in/gangadhar-jami-80930026a/" target="_blank"><i id="homeicons"  class='bx bxl-linkedin-square'></i></a>
                        <a href="https://www.youtube.com/@technicalhub8786" target="_blank"><i id="homeicons" class='bx bxl-youtube' ></i></a>
                        <a href="https://www.instagram.com/urstruly__vsg?igsh=MW11cGZlMmZ6bXNzcw==" target="_blank"><i id="homeicons" class='bx bxl-instagram' ></i></a>
                        <a href="https://wa.me/917396376944" target="_blank"><i id="homeicons" class='bx bxl-whatsapp' ></i></a>
                        <a href="https://www.facebook.com"  target="_blank"><i id="homeicons" class='bx bxl-facebook' ></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
