import { Navigationsettings } from './navigation copy 2'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { PDFDocument, rgb,StandardFonts } from 'pdf-lib';
import React from 'react';


const Events = () => {
    const [loading, setLoading] = useState(false); // State variable to track loading state
    // useEffect(() => {
    //     if (!localStorage.getItem('user')) {
    //         alert('Please Login Your Account')
    //         window.location.href = '/login'
    //     }
    // }, [])
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('https://space-club.onrender.com/img/space1.webp')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    const wait = (milliseconds) => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    };
    const Nav = useNavigate()
    const [Registration, Setregistration] = useState({
        'name':'',
        'roll':'',
        'mail':'',
        'mobile':'',
        'compitation':'Compition',
        'registration_type':'Registrstion Type',
        'second_name':'',
        "second_roll":"",
        'second_mail':'',
        'second_mobile':''
    })
    const [Registrationtype, Setregistrationtype] = useState('')
    const Checkcomp = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Assuming Registration is an object containing compitation property
        if (e.target.value!== 'Reel Chalange' && e.target.value!== 'Compition') {
            // Assuming you want to style all elements with class 'eventreg1'
            const elements = document.querySelectorAll('.eventreg1');
            elements.forEach(element => {
                element.style.display = 'block';
            });
        }else{
            const elements = document.querySelectorAll('.eventreg1');
            elements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }    

    const Checkreg = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Assuming Registration is an object containing compitation property
        if (e.target.value!== 'Registrstion Type' && e.target.value!== 'Solo Registration') {
            // Assuming you want to style all elements with class 'eventreg1'
            const elements = document.querySelectorAll('.eventreg2');
            elements.forEach(element => {
                element.style.display = 'block';
            });
        }else{
            const elements = document.querySelectorAll('.eventreg2');
            elements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }  
    const initpayment = (data) => {
        const options = {
            key: 'rzp_test_mGGsDwW7xRGWWm',
            amount: data.amount,
            currency: data.currency,
            name: 'Gangadhar Jami',
            description: 'Test Transaction',
            order_id: data.id,
            handler: async (res) => {
                try {
                    axios.post('https://space-club.onrender.com/api/payment/verify', res).then((response) => {
                        const now = new Date();
                        const year = now.getFullYear();
                        const month = now.getMonth() + 1;
                        const day = now.getDate();
                        const hours = now.getHours();
                        const minutes = now.getMinutes();
                        const seconds = now.getSeconds();
                        async function createAndDownloadReceipt(imageData, data) {
                            const pdfDoc = await PDFDocument.create();
                            const page = pdfDoc.addPage([594, 420]);
                            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

                            const receiptImage = await fetch(imageData).then(res => res.arrayBuffer());
                            const receiptImageDims = await pdfDoc.embedPng(receiptImage);
                            const imageWidth = page.getWidth();
                            const imageHeight = receiptImageDims.height * (imageWidth / receiptImageDims.width);
                            const xPos = 0;
                            const yPos = page.getHeight() - imageHeight;
                            page.drawImage(receiptImageDims, {
                                x: xPos,
                                y: yPos,
                                width: imageWidth,
                                height: imageHeight,
                            });

                            page.setFont(font);
                            page.setFontSize(10);

                            const textOptions = { x: 150, color: rgb(0, 0, 0) };
                            page.drawText(`${data.created_at}` || ' ', { ...textOptions, y:300 });
                            page.drawText(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`, { ...textOptions, y: 284 });
                            page.drawText(Registration.roll || ' ', { ...textOptions, y: 269 });
                            page.drawText(Registration.name || ' ', { ...textOptions, y: 254 });
                            page.drawText(Registration.compitation, { x: 35, y: 183, color: rgb(0, 0, 0) });
                            page.drawText(`${data.amount/100}`, { x: 550, y: 183, color: rgb(0, 0, 0) });
                            page.drawText(`${data.amount/100}`, { x: 550, y: 145, color: rgb(0, 0, 0) });
                            page.drawText(`${data.amount/100}`, { x: 550, y: 125, color: rgb(0, 0, 0), size: 10 });
                            const pdfBytes = await pdfDoc.save();
                            const blob = new Blob([pdfBytes], { type: 'application/pdf' });

                            const iframe = document.createElement('iframe');
                            iframe.src = window.URL.createObjectURL(blob);
                            iframe.style.marginTop = '1%'
                            iframe.style.width = '100%';
                            iframe.style.height = '100%';
                            iframe.style.border = 'none';
                            document.getElementById('editprofile').style.display='none'
                            document.body.appendChild(iframe);
                            const downloadButton = document.createElement('button');
                            downloadButton.textContent = 'Download PDF';
                            downloadButton.style.marginLeft = '40%';
                            // downloadButton.style.position = 'relative'
                            downloadButton.style.top = '-25%'
                            downloadButton.id = "loginbutton1"
                            downloadButton.onclick = () => {
                                const link = document.createElement('a');
                                link.href = window.URL.createObjectURL(blob);
                                link.download = `${Registration.roll}.pdf`;

                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                Nav('/passes')
                            };

                            document.body.appendChild(downloadButton);
                        }

                        const imageData = 'https://space-club.onrender.com/img/sourcerecipt.png';
                        createAndDownloadReceipt(imageData, data);

                    });
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: '#3399cc',
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };  
    
    const Register=async()=>{
        try{
            setLoading(true)
            if(Registration.name===""){
                alert('Enter Your Name')
            }else if(Registration.roll===''){
                alert('Enter Your Roll Number')
            }else if(Registration.mail===''){
                alert('Enter Your Email')
            }else if(Registration.mobile===''){
                alert('Enter Your Mobile')
            }else if(Registration.mobile.length<10){
                alert('Enter A Valid Mobile Number')
            }else if(!Number.isInteger(parseInt(Registration.mobile))){
                alert('Enter A Valid Mobile Number')
            }else if(Registration.compitation==='Compition'){
                alert('Choose Your Compitation')
            }else if(Registration.compitation!=='Reel Chalange'){
                if(Registration.registration_type==='Registrstion Type'){
                    alert('Choose Your Registration Type')
                }else if (Registration.registration_type === 'Solo Registration') {
                    try{
                        const {data} = await axios.post('https://space-club.onrender.com/api/payment/registration',{amount:30});
                        // console.log(data)
                        initpayment(data)
                    }catch(err){
                        console.log(err);
                    }finally{
                        wait(2000).then(()=>{
                            setLoading(false)
                        })
                    }
                }else if(Registration.registration_type!=='Solo Registration' && Registration.registration_type!=='Registrstion Type'){
                    if(Registration.second_name===''){
                        alert('Enter Second Person Details')
                    }else if(Registration.second_roll===''){
                        alert('Enter Second Person Roll Number')
                    }else if(Registration.second_mail===''){
                        alert('Enter Second Person Email')
                    }else if(Registration.second_mobile===''){
                        alert('Enter Second Person Mobile Number')
                    }else if(Registration.second_mobile.length<10){
                        alert('Enter A Valid Mobile Number')
                    }else if(!Number.isInteger(parseInt(Registration.second_mobile))){
                        alert("Enter Second Person's Valid Mobile Number")
                    }else{
                        try{
                            const {data} = await axios.post('https://space-club.onrender.com/api/payment/registration',{amount:50});
                            // console.log(data)
                            initpayment(data)
                        }catch(err){
                            console.log(err);
                        }finally{
                            wait(2000).then(()=>{
                                setLoading(false)
                            })
                        }
                    }
                }
            }else{
                try{
                    const {data} = await axios.post('https://space-club.onrender.com/api/payment/registration',{amount:50});
                    // console.log(data)
                    initpayment(data)
                }catch(err){
                    console.log(err);
                }finally{
                    wait(2000).then(()=>{
                        setLoading(false)
                    })
                }
            }
        }catch(err){
            console.log(err)
        }finally{
            wait(1000).then(()=>{
                setLoading(false)
            })
        }
    }

    return (
        <div>
            <Navigationsettings />
            {loading ? ( // Conditional rendering of loading animation
                    <div class="container11">
                        <div class="preloader11">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="shadow11"></div>
                    </div>
                ) : (
                    <div id="editprofile">
                        <div id="loginblock" >
                            <h4>Registrstion Form</h4>
                            <hr style={{ marginTop: '-25px' }} id="hr" />
                            <input style={{color:'black'}} id="loginblock2" placeholder="Your Name" onChange={(e)=>Setregistration({...Registration,name:e.target.value})}/><br /><br />
                            <input style={{color:'black'}} id="loginblock2" placeholder="Your Roll Number" onChange={(e)=>Setregistration({...Registration,roll:e.target.value})}/><br /><br />
                            <input type='email' style={{color:'black'}} id="loginblock2" placeholder="Your Email" onChange={(e)=>Setregistration({...Registration,mail:e.target.value})}/><br /><br />
                            <input maxLength={10} style={{color:'black'}} id="loginblock2" placeholder="Your Mobile Number" onChange={(e)=>Setregistration({...Registration,mobile:e.target.value})}/><br /><br />
                            <select style={{color:'black'}} id="loginblock2" placeholder='Compitation' onChange={(e)=>Setregistration({...Registration,compitation:e.target.value},Checkcomp(e))}>
                                <option>Compition</option>
                                <option>Reel Chalange</option>
                                <option>Poster Presentation</option>
                                <option>Painting</option>
                                <option>Quize</option>
                            </select>
                            <div className='eventreg1'>
                                <select style={{color:'black'}} id="loginblock2" placeholder='Compitation' onChange={(e)=>Setregistration({...Registration,registration_type:e.target.value},Checkreg(e))}>
                                    <option>Registrstion Type</option>
                                    <option>Solo Registration</option>
                                    <option>Dual Registration</option>
                                </select>
                                <div className='eventreg2'>
                                    <input style={{color:'black'}} id="loginblock2" placeholder="Second Person Name" onChange={(e)=>Setregistration({...Registration,second_name:e.target.value})}/><br/><br/>
                                    <input style={{color:'black'}} id="loginblock2" placeholder="Second Person Roll Number" onChange={(e)=>Setregistration({...Registration,second_roll:e.target.value})}/><br/><br/>
                                    <input style={{color:'black'}} id="loginblock2" placeholder="Second Person Email" onChange={(e)=>Setregistration({...Registration,second_mail:e.target.value})}/><br/><br/>
                                    <input maxLength={10} style={{color:'black'}} id="loginblock2" placeholder="Second Person Mobile Number" onChange={(e)=>Setregistration({...Registration,second_mobile:e.target.value})}/><br/><br/>
                                </div>
                            </div>
                            <button style={{ marginBottom: '25px' }} id="loginbutton1" onClick={()=>Register()} >SUBMIT</button><br />
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Events;
