import c1 from '../c1.jpg'
import c2 from '../c2.jpg'
import { useState } from "react"

function Bulb(){
    const [light,Status] = useState(false)
    const [apple,State] = useState(true)
    
    
    return(
        <>
        <button onClick={()=>Status(true)}>ON</button>
        <button onClick={()=>Status(false)}>OFF</button><br/><br/>
        {
            light===true ? <img src={c1}/> : <img src={c2}/>
        }
        <br/><br/>
        {
            apple===true ? <img id='img' src='apple.jpg' alt='apple' style={{width:"200px",height:'200px'}} onMouseOver={()=>State(false)} onMouseOut={()=>State(true)}/> : <img id='img' src='apple1.jpeg' alt='apple' style={{width:'200px',height:'200px'}} onMouseOver={()=>State(false)} onMouseOut={()=>State(true)}/>
        }
        </>
    )
}

export default Bulb;