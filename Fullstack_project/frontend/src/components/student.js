function Student(props){
    let data = [
        {
            name:'Gangadahr',
            roll:'22P35A0384',
            clg:'ACET'
        },
        {
            name:'Eswari',
            roll:'21P3A0225',
            clg:'ACET'
        }
    ]
    // let l =[]
    // for(var i=0;i<data.length;i++){
    //     l.push('Name Is ',data[i]['name'],<br/>)
    //     l.push('Roll Number Is ',data[i]['roll'],<br/>)
    //     l.push('College Is ',data[i]['clg'],<br/>)
    // }
    return(
        <><br/>
                <table border={2} align="center" cellSpacing={0} cellPadding={10} style={{width:'500px',height:'300px'}}>
                        <tr>
                            <th>NAME</th>
                            <th>ROLL NUMBER</th>
                            <th>COLLEGE</th>
                        </tr>
                        {data.map((ele,i)=>{
                            return(
                                <tr><td>{ele.name}</td><td>{ele.roll}</td><td>{ele.clg}</td></tr>
                            )
                        })}
                </table>
                <ol style={{textAlign:'left'}}>
                    {data.map((ele,i)=>{
                        return(
                            <li><ul><li>Name Is {ele.name}</li><li>Roll Number Is {ele.roll}</li><li>College Is {ele.clg}</li></ul><br/></li>
                        )
                    })}
                </ol>
        </>
    )
}

export default Student;