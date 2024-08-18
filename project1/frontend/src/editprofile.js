import { Link ,useNavigate} from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import axios from "axios";

function Editprofile(){
    const Nav = useNavigate();
    const id = localStorage.getItem('user');
    const [databymail, setdatabymail] = useState([]);
    const imageref = useRef(null)
    const [image, setimage] = useState('');
    const changeimg=()=>{
        imageref.current.click();
    }
    const [editdata, seteditdata] = useState({
        'fname': '',
        'lname': '',
        'email': '',
        'myimg': ''
    });

    useEffect(() => {
        if (!localStorage.getItem('user')) {
        alert('Please Login Your Account');
        Nav('/login');
        } else {
            axios.get(`http://localhost:7416/getdatabyemail/${id}`).then((response) => {
                const data = response.data.logindata;
                console.log(data)
                setdatabymail(data);
                seteditdata({
                'fname': data.fname,
                'lname': data.lname,
                'email': data.email,
                'myimg': ''
                });
            });
        }
    }, [Nav, id]);

    const Savedata = () => {
        if(!editdata.myimg){
            axios.put(`http://localhost:7416/editdata/${id}`,editdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
        }else{
            const neweditdata = new FormData()
            neweditdata.append('fname',editdata.fname)
            neweditdata.append('lname',editdata.lname)
            neweditdata.append('email',editdata.email)
            neweditdata.append('myimg',editdata.myimg)
            axios.put(`http://localhost:7416/editdataimg/${id}`,neweditdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
            // console.log(editdata.myimg)
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
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
                <Link to={'/editprofile'}><button style={{backgroundColor:'red'}} id="navbtn">EDIT PROFILE</button></Link>
                <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                <Link to={'/deleteaccount'}><button id="navbtn">DELETE ACCOUNT</button></Link>
            </div>
            <div id="loginblock" style={{position:'relative',top:'80px',left:'900px', backgroundColor:' rgb(219, 208, 84)'}}>
                <div id="editimgdiv">{image ? <img onClick={changeimg} id="editimg" src={URL.createObjectURL(image)} alt="profile img"/> : <img id="editimg" onClick={changeimg} src={`http://localhost:7416/img/${databymail.profile}`} alt="profileImg"/>}</div><br/>
                <input id="loginblock1" value={editdata.fname} type="text" placeholder="Enter Your First Name" onChange={(e)=>seteditdata({...editdata,fname:e.target.value})}/><br/><br/>
                <input id="loginblock1" value={editdata.lname} type="text" placeholder="Enter Your Last Name" onChange={(e)=>seteditdata({...editdata,lname:e.target.value})}/><br/><br/>
                <input id="loginblock1" value={editdata.email} type="email" placeholder="Enter Your Mail" onChange={(e)=>seteditdata({...editdata,email:e.target.value})}/><br/><br/>
                <input className="fileinput" type="file" ref={imageref} onChange={(e)=>seteditdata({...editdata,myimg:e.target.files[0]},setimage(e.target.files[0]))}/><br/><br/>
                <button id="loginbutton" onClick={()=>Savedata()}>SAVE</button>
            </div>
        </div>
    )
}

export default Editprofile;