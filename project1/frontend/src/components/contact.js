import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7416/sendfeedback',formData).then((response)=>{
            alert(response.data.msg)
            window.location.reload()
        })
        // console.log("Form submitted:", formData);
    };
    const Nav = useNavigate()
    
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
            <div className="container" id="contact">
                <h2>CONTACT US</h2><br/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        {/* <label htmlFor="name" className="form-label">
                            Name
                        </label> */}
                        <input
                            placeholder="Name"
                            type="text"
                            className="formcontrol"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="email" className="form-label">
                            Email
                        </label> */}
                        <input
                            placeholder="Email"
                            type="email"
                            className="formcontrol"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="subject" className="form-label">
                            Subject
                        </label> */}
                        <input
                            placeholder="Subject"
                            type="text"
                            className="formcontrol"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="message" className="form-label">
                            Message
                        </label> */}
                        <textarea
                            placeholder="Message"
                            className="formcontrol"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" id="loginbutton">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
