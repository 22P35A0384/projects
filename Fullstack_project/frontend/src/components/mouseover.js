import { useState } from 'react';
import myimg1 from '../panther.jpg'
import myimg2 from '../thar.jpg'
function Mouseover(){
    const [img,Img] = useState(true)
    return(
        <>
            <h1>Testing.....</h1>
            {
                img===true ? <img src={myimg1} onMouseOver={()=>{Img(false)}} onMouseOut={()=>{Img(true)}} style={{width:"600px",height:'400px'}}/> : <img src={myimg2} onMouseOver={()=>{Img(false)}} onMouseOut={()=>{Img(true)}} style={{width:"600px",height:'400px'}}/>
            }
        </>
    )
}

export default Mouseover;