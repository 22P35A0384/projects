import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
import moment from 'moment';

const App = () => {
    const currentDate = new Date();
    const localDate = currentDate.toLocaleString();
    const wait = (milliseconds) => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    };
    const [roll, setRoll] = useState('');
    const [data, setData] = useState(null);
    const [list, setList] = useState([]);
    const [datathub, setDataThub] = useState(null);
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState('');
    const [login, Setlogin] = useState(false)
    const [apicall, Setapicall] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Userhistory, setUserhistory] = useState(null)
    const login1 = {
        'user' : username,
        'pass' : password,
        'date' : localDate
    }
    let data1;

    useEffect(()=>{
        if(localStorage.getItem('user')){
            // alert('Please Login Your Account')
            Setlogin(true)
        }else{
            alert('Please Login Your Account')
        }
    },[])
    const clearData = () => {
        setList([]);
        setData(null);
        setDataThub(null);
        setImg('');
    };

    const handleInputChange = (e) => {
        setRoll(e.target.value);
    };

    const fetchData = async (url, setter) => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setter(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setRoll('');
        }
    };

    const postData = async (url, data, setter) => {
        try {
            setLoading(true);
            const response = await axios.post(url, data);
            setter(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setRoll('');
        }
    };
    
    const apiuser = localStorage.getItem('user')

    const getData = () => {
        if (roll === '') {
            alert('Please Enter A Roll Number');
        } else {
            clearData();
            axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/history`,{username:apiuser,query:`${roll} - Roll Search`, date:localDate})
            fetchData(`https://api-4ixzu4qsgq-uc.a.run.app/student/data/${roll}`, setData);
        }
    };

    const getDataThub = () => {
        if (roll === '') {
            alert('Please Enter A Roll Number');
        } else {
            clearData();
            axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/history`,{username:apiuser,query:`${roll} - THUB`,date:localDate})
            // postData(`https://space-club.onrender.com/capture_image`, { email: roll }, setDataThub);
            alert('currently not avilable')
        }
    };

    const searchStudent = () => {
        if (roll === '') {
            alert('Please Enter A Name');
        } else {
            clearData();
            axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/history`,{username:apiuser,query:`${roll} - SEARCH`,date:localDate})
            fetchData(`https://api-4ixzu4qsgq-uc.a.run.app/searchstd/${roll}`, (res) => {
                if (res.length === 0) {
                    alert('Name Not Found');
                } else {
                    setList(res);
                }
            });
        }
    };

    const showThubImg = () => {
        if (roll === '') {
            alert('Please Enter A Roll Number');
        } else {
            clearData();
            axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/history`,{username:apiuser,query:`${roll} - THUB`,date:localDate})
            setImg(roll.toUpperCase());
            setRoll('');
        }
    };

    const listOperation = (item) => {
        axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/history`,{username:apiuser,query:`${item.Roll_No} - Search Select`,date:localDate})
        setData(item);
        setList('')
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when login request starts
        if (username === "") {
            setLoading(false); // Set loading state to false
            alert('Enter User Name');
            return;
        } else if (password === "") {
            setLoading(false); // Set loading state to false
            alert('Enter Password');
            return;
        }
    
        try {
            const response = await axios.post(`https://api-4ixzu4qsgq-uc.a.run.app/checkmail`, login1);
            if (response.data.msg === 'Invalid User!') {
                wait(500).then(()=>{
                    alert('Invalid User! (or) Account Was Not Registered');
                })
            } else if (response.data === false) {
                wait(500).then(()=>{
                    alert('Invalid Password!');
                })
            } else {
                    localStorage.setItem('user', login1.user);
                    const id = localStorage.getItem('user')
                    console.log(id)
                    axios.get(`https://api-4ixzu4qsgq-uc.a.run.app/getdata/${id}`).then((response) => {
                        data1 = response.data;
                        // console.log(data1)
                        localStorage.setItem('profile', data1.profile);
                        // console.log(response.data)
                        if(login1.user==='saigangadharsgk@gmail.com'){
                            alert('Welcome Home BOSS :)')
                            Setlogin(true)
                        }else{
                            alert(`Welcome ${data1.fname} ${data1.lname} !!`)
                            // {`https://thecodemind.io/app/studentpics/${'22P35A0384'}.png`}
                            // nav(`/home`);
                            Setlogin(true)
                        }
                    });
            }
        } catch (error) {
            console.log(error);
            wait(500).then(()=>{
                alert('Error occurred while logging in');
            })
        } finally {
            wait(500).then(()=>{
                setLoading(false); // Set loading state to false after login request completes
            })
        }
        // Handle form submission logic here
        // console.log('Username:', username);
        // console.log('Password:', password);
    };

    const Logout=()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('profile')
        setUsername('')
        setPassword('')
        setData('')
        setImg('')
        setList('')
        Setlogin(false)
        alert('Logged Out Sucessfully!!!')
    }

    const profileimg = localStorage.getItem('profile')

    const Getuserhistory = async () => {
        try {
            const res = await axios.get('https://api-4ixzu4qsgq-uc.a.run.app/stduserhistory');
            const x = res.data.reverse()
            setUserhistory(x)
    
            // const parseDate = (dateString) => {
            //     const formats = [
            //         'DD/MM/YYYY, HH:mm:ss', 
            //         'M/DD/YYYY, hh:mm:ss A', 
            //         'DD/MM/YYYY, hh:mm:ss A', 
            //         'M/D/YYYY, hh:mm:ss A',
            //         'M/DD/YYYY, h:mm:ss A',
            //         'MM/DD/YYYY, h:mm:ss A'
            //     ];
            //     for (let format of formats) {
            //         const date = moment(dateString, format, true);
            //         if (date.isValid()) {
            //             return date;
            //         }
            //     }
            //     console.log(`Invalid date: ${dateString}`);
            //     return moment(dateString); // Return the parsed moment object even if invalid
            // };
    
            // // Flatten all login and searchHistory dates into a single array with metadata
            // const combinedEntries = res.data.flatMap(user => [
            //     ...user.login.map(dateString => ({
            //         date: parseDate(dateString),
            //         type: 'login',
            //         userId: user._id
            //     })),
            //     ...user.searchHistory.map(searchItem => ({
            //         date: parseDate(searchItem.date),
            //         type: 'search',
            //         userId: user._id,
            //         query: searchItem.query
            //     }))
            // ]);
    
            // // Sort the combined entries
            // const sortedEntries = combinedEntries
            //     .sort((a, b) => b.date.valueOf() - a.date.valueOf());
    
            // // Reconstruct the original data structure with sorted dates
            // const userHistory = res.data.map(user => {
            //     const userEntries = sortedEntries.filter(entry => entry.userId === user._id);
            //     return {
            //         ...user,
            //         login: userEntries
            //             .filter(entry => entry.type === 'login')
            //             .map(entry => entry.date.format('MM/DD/YYYY, hh:mm:ss A')),
            //         searchHistory: userEntries
            //             .filter(entry => entry.type === 'search')
            //             .map(entry => ({
            //                 query: entry.query,
            //                 date: entry.date.format('MM/DD/YYYY, hh:mm:ss A')
            //             }))
            //     };
            // });
    
            // setUserhistory(userHistory);
        } catch (err) {
            console.log(err);
        }
    };
    
    

    return (
        <div className="container">
            {login ?
            <div>
            {loading ? (
                <div class="container11">
                <div class="preloader11">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="shadow11"></div>
              </div>
            ) : (
                <div>
                    <div className='headbar'>
                        <img src={`https://raw.githubusercontent.com/22P35A0384/backend/main/public/profiles/${profileimg}`} />
                        {apiuser=='saigangadharsgk@gmail.com' ? <>{Userhistory ? <button onClick={()=>setUserhistory(null)}>CLOSE HISTORY</button> : <button onClick={()=>Getuserhistory()}>GET USER HISTORY</button>}</> : ""}
                        <button onClick={()=>Logout()}>LOGOUT</button>
                    </div>
                    <h1>Student Bio</h1>
                    <div className="input-group">
                        <input
                            placeholder="Enter Roll Number"
                            value={roll}
                            onChange={handleInputChange}
                        /><br/>
                        <button onClick={getData}>Get Details</button>
                        <button onClick={() => setData(null)}>Reset</button>
                    </div>

                    <h1>THUB</h1>
                    <div className="input-group">
                        <input
                            id="Thub"
                            placeholder="Enter Roll Number"
                            value={roll}
                            onChange={handleInputChange}
                        /><br/>
                        <button onClick={showThubImg}>Get Details</button>
                        <button onClick={() => setImg('')}>Reset</button>
                    </div>

                    <h1>Search By Name</h1>
                    <div className="input-group">
                        <input
                            placeholder="Enter Name"
                            value={roll}
                            onChange={handleInputChange}
                        /><br/>
                        <button onClick={searchStudent}>Get Details</button>
                        <button onClick={() => setList([])}>Reset</button>
                    </div>

                    {data && (
                        <div className="student-info">
                            <img
                                className="student-img"
                                src={`https://info.aec.edu.in/${data.clg}/StudentPhotos/${data.Roll_No}.jpg`}
                                alt="student"
                            />
                            <div className="table-container">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Roll No</th>
                                            <td>{data.Roll_No}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{data.Student_Name}</td>
                                        </tr>
                                        <tr>
                                            <th>Mobile</th>
                                            <td>{data.Mobile_No}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{data.E_mail}</td>
                                        </tr>
                                        <tr>
                                            <th>Branch</th>
                                            <td>{data.Branch}</td>
                                        </tr>
                                        <tr>
                                            <th>Semester</th>
                                            <td>{data.Semester}</td>
                                        </tr>
                                        <tr>
                                            <th>Section</th>
                                            <td>{data.Section}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{data.Permanent_Address}</td>
                                        </tr>
                                        <tr>
                                            <th>DOB</th>
                                            <td>{data.Date_Of_Birth}</td>
                                        </tr>
                                        <tr>
                                            <th>Religion</th>
                                            <td>{data.Religion}</td>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>{data.Category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {Userhistory ? 
                        <div className='tablesparent'>
                            <div className="table-container1">
                                <h2 style={{ color: 'white' }}>User Search History</h2>
                                <table className="search-table1">
                                    <thead>
                                        <tr>
                                        <th>User</th>
                                        <th>Search Query</th>
                                        <th>Search Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Userhistory.map((item) => (
                                            <>
                                            {(item.searchHistory) ? 
                                                <tr>
                                                    <td>{item.mail}</td>
                                                    <td>{item.searchHistory}</td>
                                                    <td>{item.date}</td>
                                                </tr> : ""
                                            }
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-container">
                                <table className="search-table">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Login History</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Userhistory.map((item) => (
                                        <>
                                            {(item.login) ? 
                                                <tr>
                                                    <td>{item.mail}</td>
                                                    <td>{item.login}</td>
                                                </tr>
                                            : ""}
                                        </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    : ''}

                    {datathub && (
                        <div className="student-info">
                            <img
                                className="student-img"
                                src={`${datathub.ImageURL}`}
                                alt="student"
                            />
                            <div className="table-container">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Roll No</th>
                                            <td>{datathub.Rollnumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{datathub.Name}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{datathub.Phonenumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{datathub.Email}</td>
                                        </tr>
                                        <tr>
                                            <th>Branch</th>
                                            <td>{datathub.Branch}</td>
                                        </tr>
                                        <tr>
                                            <th>Course</th>
                                            <td>{datathub.Course}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {img && (
                        <div className="image-container">
                            <img
                                className="student-img"
                                src={`https://thecodemind.io/app/studentpics/${img}.png`}
                                alt="student"
                            />
                        </div>
                    )}

                    {list.length > 0 && (
                        <div className="table-container">
                            <h2 style={{color:'white'}}>Total Search Results: {list.length}</h2>
                            <table className='search-table'>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Roll No</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((item) => (
                                        <tr key={item.Roll_No} onClick={() => listOperation(item)} className="list-item">
                                            <td>
                                                <img
                                                    className="table-img"
                                                    src={`https://info.aec.edu.in/${item.clg}/StudentPhotos/${item.Roll_No}.jpg`}
                                                    alt="student"
                                                />
                                            </td>
                                            <td>{item.Roll_No}</td>
                                            <td>{item.Student_Name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
            </div>
            : 
            // <div className='logincard'>
            //     <div className='loginblock'>
            //         <input className='logininput' placeholder='USER NAME'/><br/>
            //         <input className='logininput' placeholder='PASSWORD'/><br/>
            //         <button className='loginbtn'>LOGIN</button>
            //     </div>
            // </div>
            <div>
                {loading ? 
                    <div class="container11">
                        <div class="preloader11">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="shadow11"></div>
                    </div>
                :
                     <div className="square">
                        <i style={{ '--clr': '#00ff0a' }}></i>
                        <i style={{ '--clr': '#ff0057' }}></i>
                        <i style={{ '--clr': '#fffd44' }}></i>
                        <div className="login">
                            <h2>LOGIN</h2>
                            <form onSubmit={handleSubmit}>
                            <div className="inputBx">
                                <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="inputBx">
                                <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Sign in" />
                            </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        }
        </div>
    );
};

export default App;
