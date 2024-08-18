import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigationsettings = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const Nav = useNavigate();
  const [data, setData] = useState({
    profile: '',
    fname: '',
    lname: ''
  });

  useEffect(() => {
    axios.get(`https://space-club.onrender.com/getdata/${window.localStorage.getItem('user')}`).then((res) => {
      setData({
        profile: res.data.profile,
        fname: res.data.fname,
        lname: res.data.lname
      });
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const toggleNavbarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const Getlogout = () => {
    Nav('/logout');
    toggleNavbarCollapse();
  };

  const Gotosettings = () => {
    Nav('/editprofile');
    toggleNavbarCollapse();
  };

  const Gotohome = () => {
    Nav('/home');
    toggleNavbarCollapse();
  };

  const Gotoprojects = () => {
    Nav('/projects');
    toggleNavbarCollapse();
  };
  const Gotoevents = () => {
    Nav('/passes');
    toggleNavbarCollapse();
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top" id="navigationmain">
            <img src="https://space-club.onrender.com/img/nav_icon.jpg" alt="astec logo"/>
            <h1>ASTEC</h1>
          </a>{" "}
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={toggleNavbarCollapse}
            aria-expanded={!isCollapsed}
            style={{position:'relative',left:'10%'}}
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? '' : 'in'}`}
          id="bs-example-navbar-collapse-1"
        >
          <img src={`https://space-club.onrender.com/profile/${data.profile}`} id="profilesubimg1"/>
          <h3  id="mainh3name">{data.fname} {data.lname}</h3>
          <div id="subnav1">
            <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotohome()}}>HOME</a><br/>
            <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotoprojects()}}>PROJECTS</a><br/>
            <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotoevents()}}>EVENTS</a><br/>
            <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotosettings()}}>SETTINGS</a><br/>
            <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Getlogout()}}>LOGOUT</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
