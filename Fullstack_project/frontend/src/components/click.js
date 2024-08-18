function Click(){
    const Clicked = (e)=>{
        alert('Clicked')
        document.body.style.background='red'
        e.target.style.background='green'
    }
    const Overed = ()=>{
        alert('Overed')
    }
    const Change = (e)=>{
        var x = e.target.value
        document.getElementById('p').innerText=x
    }
    return(
        <div>
            <h1>events</h1><br/>
            <button onClick={Clicked}>Click Here</button><br/>
            <button onMouseOver={Overed}>Mouse Over Here</button><br/>
            <input type="text" name="fname" onChange={Change}/>
            <p id="p"></p>
        </div>
    )
}

export default Click;