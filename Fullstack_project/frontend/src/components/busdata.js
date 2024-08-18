import axios from "axios";
import { useState,Link } from "react";

function Getbusdata(){
    const [busdata,setbusdata] = useState([]);
    axios.get('http://localhost:7416/busdata').then((response)=>{
        // console.log(response.data.dataofbus)
        setbusdata(response.data.dataofbus)
    })
    const deleteuser=()=>{
        alert('Deleted')
    }
    return(
        <div>
            <center>
                <table style={{color:'white'}} border={1} cellSpacing={0}>
                    <tr>
                        <th>Sl No</th>
                        <th>Date</th>
                        <th>Distance</th>
                        <th>Registration Number</th>
                        <th>Route Name</th>
                        <th>Uploaded Date</th>
                        <th>Strength</th>
                        <th>Society</th>
                        <th>Branch</th>
                        <th>Capacity</th>
                        <th>No Students</th>
                        <th>OMR</th>
                        <th>CMR</th>
                        <th>KMS</th>
                        <th>Timestamp</th>
                        <th colSpan={2}>Settings</th>
                    </tr>
                    {/* {busdata && busdata.map((ele,i)=>{
                        return(
                            <tr id={ele._id} style={{cursor:'default'}}>
                                <td>{i+1}</td>
                                <td>{ele.data}</td>
                                <td>{ele.distance}</td>
                                <td>{ele.regno}</td>
                                <td>{ele.routename}</td>
                                <td>{ele.uploaddate}</td>
                                <td>{ele.strength}</td>
                                <td>{ele.society}</td>
                                <td>{ele.branch}</td>
                                <td>{ele.capacity}</td>
                                <td>{ele.students}</td>
                                <td>{ele.omr}</td>
                                <td>{ele.cmr}</td>
                                <td>{ele.kms}</td>
                                <td>{ele.Timestamp}</td>
                                <td><Link to={`/editform/${ele._id}`}><button style={{cursor:'pointer'}}>Edit</button></Link></td>
                                <td><button style={{cursor:'pointer'}} onClick={()=>deleteuser(ele._id)}>Delete</button></td>
                            </tr>
                        )
                    })} */}
                </table>
            </center>
        </div>
    )
}

export default Getbusdata;