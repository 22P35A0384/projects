import { useState } from "react"

function UseState(){
    const [cnt,setCnt] = useState(0);
    const incr=()=>{
        setCnt(cnt+1)
    }
    return(
        <>
            <p>{cnt}</p>
            <button onClick={incr}>Increment</button>
        </>
    )
}

export default UseState;