import React, { useState,useEffect } from 'react';
import axios from 'axios'
const Stdbio=()=>{
    const [roll, Setroll] = useState('')
    const [Data, setdata] = useState('')
    // useEffect(() => {
    //     // Check if Data is not empty and has the clg property
    //     if (Data && Data.clg) {
    //         alert(Data.clg);
    //     }
    // }, [Data]); // Watch for changes in the Data state
    const Getdata=()=>{
        axios.get(`https://space-club.onrender.com/student/data/${roll}`).then((res)=>{
            setdata(res.data)
            console.log(res.data)
            // alert(Data.clg)
        })
    }
    return(
        <div>
            <h1>Student Bio</h1>
            <input placeholder="Enter Roll Number" onChange={(e)=>{Setroll(e.target.value)}}/><br/>
            <button onClick={()=>{Getdata()}}>Get Details</button>
            {Data ? <div>
                <img style={{width:'200px', height:'230px'}} src={`https://info.aec.edu.in/${Data.clg}/StudentPhotos/${Data.Roll_No}.jpg`} alt="student Img" />
                <div>{Data.Roll_No}</div>
                <div>{Data.Student_Name}</div>
                <div>{Data.Mobile_No}</div>
                <div>{Data.E_mail}</div>
                <div>{Data.Branch}</div>
                <div>{Data.Semester}</div>
                <div>{Data.Section}</div>
                <div>{Data.Permanent_Address}</div>
                <div>{Data.Date_Of_Birth}</div>
                <div>{Data.Religion}</div>
                <div>{Data.Category}</div>
            </div> : ''}
        </div>
    )
}

export default Stdbio;