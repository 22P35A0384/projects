import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const Nav = useNavigate();

  const toggleNavbarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const Getlogin = (e) => {
    e.preventDefault();
    Nav("/login");
    toggleNavbarCollapse(); // Close the navigation menu after clicking on a link
  };

  const Getsignup = (e) => {
    e.preventDefault();
    Nav("/newaccount");
    toggleNavbarCollapse(); // Close the navigation menu after clicking on a link
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top" id="navigationmain">
            <img src="https://space-club.onrender.com/img/nav_icon.jpg" alt="astec logo" />
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
          className={`collapse navbar-collapse ${isCollapsed ? "" : "in"}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul id="ulnav" className="nav navbar-nav navbar-right">
            <li>
              <a style={{backgroundColor:'transparent'}} href="#features" className="page-scroll">
                Events
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#about" className="page-scroll">
                Our AIM
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#services" className="page-scroll">
                COLLABORATIONS
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a style={{backgroundColor:'transparent'}} href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a>
                <button onClick={Getlogin} id="loginbtn">SIGN IN</button>
              </a>
            </li>
            <li>
              <a>
                <button onClick={Getsignup} id="loginbtn">SIGN UP</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
