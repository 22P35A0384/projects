import { useEffect } from "react";
import React from 'react';
import { googleLogout } from '@react-oauth/google';

function Logout(){
    googleLogout();
    useEffect(()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('id')
        localStorage.removeItem('fname')
        localStorage.removeItem('lname')
        localStorage.removeItem('profile')
        localStorage.removeItem('email')
        window.location.href='/'
    })
    return(
        <></>
    )
}

export default Logout;