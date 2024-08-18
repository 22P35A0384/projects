import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from '../data/data.json';
import { Navigationhome } from "./navigation copy";

const Home=()=>{
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/whitebg.jpg')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    // console.log(window.localStorage.getItem('profile'))
    setBackgroundImage();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    // console.log(localStorage.getItem('user'))
    const [landingPageData, setLandingPageData] = useState({});
        useEffect(() => {
            setLandingPageData(JsonData);
    }, []);
    return(
        <>
            <Navigationhome />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </>
    )
}

export default Home;