// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const initialdata = [{
//     'fname':'Gangadhar',
//     'lname':'Jami',
//     'email':'saigangadharsgk@gmail.com',
//     'salary':'$95,000',
//     'date':'15/10/2003'
//   },{
//     'fname':'Eswari',
//     'lname':'Nanduri',
//     'email':'peddakka@gmail.com',
//     'salary':'$85,000',
//     'date':'15/10/2003'
//   },{
//     'fname':'Gangadhar',
//     'lname':'Jami',
//     'email':'saigangadharsgk@gmail.com',
//     'salary':'$95,000',
//     'date':'15/10/2003'
//   },{
//     'fname':'Eswari',
//     'lname':'Nanduri',
//     'email':'peddakka@gmail.com',
//     'salary':'$85,000',
//     'date':'15/10/2003'
//   },{
//     'fname':'Gangadhar',
//     'lname':'Jami',
//     'email':'saigangadharsgk@gmail.com',
//     'salary':'$95,000',
//     'date':'15/10/2003'
//   },{
//     'fname':'Eswari',
//     'lname':'Nanduri',
//     'email':'peddakka@gmail.com',
//     'salary':'$85,000',
//     'date':'15/10/2003'
//   }]
//   const [data, setdata] = useState(initialdata)
//   const Delete=(e)=>{
//     alert(data)
//     const updataa = [...data];
//     updataa.splice(e,1);
//     setdata(updataa);
//   }
//   return (
//    <>
//     <h1>
//       task 2
//     </h1>
//     <table border={2} cellSpacing={1} cellPadding={10}>
//       <tr>
//         <th>No</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Email</th>
//         <th>Salary</th>
//         <th>Date</th>
//         <th colSpan={2}>Actions</th>
//       </tr>
//       {data && data.map((ele,i)=>{
//         return(
//           <tr id={i}>
//             <td>{i+1}</td>
//             <td>{ele.fname}</td>
//             <td>{ele.lname}</td>
//             <td>{ele.email}</td>
//             <td>{ele.salary}</td>
//             <td>{ele.date}</td>
//             <td><button onClick={()=>Edit(i)}>Edit</button></td>
//             <td><button onClick={()=>Delete(i)}>Delete</button></td>
//           </tr>
//         )
//       })}
//     </table>
//    </>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const initialData = [
    {
      'fname': 'Gangadhar',
      'lname': 'Jami',
      'email': 'saigangadharsgk@gmail.com',
      'salary': '$95,000',
      'date': '15/10/2003'
    },
    // Add more initial data as needed
  ];

  const [data, setData] = useState(initialData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newUser, setNewUser] = useState({
    'fname': '',
    'lname': '',
    'email': '',
    'salary': '',
    'date': '',
  });
  const [editUser, setEditUser] = useState({
    'fname': '',
    'lname': '',
    'email': '',
    'salary': '',
    'date': '',
  });
  const handleEdit = (index) => {
    setEditingIndex(index);
    // Create a copy of the user data for editing
    setEditUser({ ...data[index] });
  };

  const handleSave = () => {
    // Update the data array with the edited user data
    const updatedData = [...data];
    updatedData[editingIndex] = editUser;
    setData(updatedData);
    // Reset editing state
    setEditingIndex(null);
  };

  const handleCancel = () => {
    // Reset editing state without saving changes
    setEditingIndex(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };
  const handleInputAdd = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    // Add the new user to the data array
    setData([...data, newUser]);
    // Clear the newUser state for the next addition
    setNewUser({
      'fname': '',
      'lname': '',
      'email': '',
      'salary': '',
      'date': '',
    });
  };

  const handleDelete = (index) => {
    // Remove the user from the data array
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  const [showForm, setShowForm] = useState(false);
  return (
    <center>
      <h1>Task 2</h1>
      <table border={2} cellSpacing={1} cellPadding={10}>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="fname"
                    value={editUser.fname}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.fname
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="lname"
                    value={editUser.lname}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.lname
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="email"
                    value={editUser.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="salary"
                    value={editUser.salary}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.salary
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="date"
                    value={editUser.date}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.date
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button style={{marginLeft:'6px'}} onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button style={{marginLeft:'6px'}} onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New User</h2>
      {showForm ? (
        <div>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={newUser.fname}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={newUser.lname}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={newUser.salary}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={newUser.date}
            onChange={handleInputAdd}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>New User</button>
      )}
    </center>
  );
}

export default App;

// import React, { useState } from 'react';

// function App() {
//   const initialData = [
//     {
//       'fname': 'Gangadhar',
//       'lname': 'Jami',
//       'email': 'saigangadharsgk@gmail.com',
//       'salary': '$95,000',
//       'date': '15/10/2003'
//     },
//     // Add more initial data as needed
//   ];

//   const [data, setData] = useState(initialData);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [newUser, setNewUser] = useState({
//     'fname': '',
//     'lname': '',
//     'email': '',
//     'salary': '',
//     'date': '',
//   });
//   const [showForm, setShowForm] = useState(false);

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     // Create a copy of the user data for editing
//     setNewUser({ ...data[index] });
//   };

//   const handleSave = () => {
//     // Update the data array with the edited user data
//     const updatedData = [...data];
//     updatedData[editingIndex] = newUser;
//     setData(updatedData);
//     // Reset editing state
//     setEditingIndex(null);
//   };

//   const handleCancel = () => {
//     // Reset editing state without saving changes
//     setEditingIndex(null);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser({
//       ...newUser,
//       [name]: value,
//     });
//   };

//   const handleAddUser = () => {
//     // Add the new user to the data array
//     setData([...data, newUser]);
//     // Clear the newUser state for the next addition
//     setNewUser({
//       'fname': '',
//       'lname': '',
//       'email': '',
//       'salary': '',
//       'date': '',
//     });
//     // Hide the form after adding
//     setShowForm(false);
//   };

//   const handleDelete = (index) => {
//     // Remove the user from the data array
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   return (
//     <>
//       <h1>Task 2</h1>
//       <table border={2} cellSpacing={1} cellPadding={10}>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Salary</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((user, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>
//                 {editingIndex === index ? (
//                   <input
//                     type="text"
//                     name="fname"
//                     value={newUser.fname}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   user.fname
//                 )}
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <input
//                     type="text"
//                     name="lname"
//                     value={newUser.lname}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   user.lname
//                 )}
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <input
//                     type="text"
//                     name="email"
//                     value={newUser.email}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   user.email
//                 )}
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <input
//                     type="text"
//                     name="salary"
//                     value={newUser.salary}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   user.salary
//                 )}
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <input
//                     type="text"
//                     name="date"
//                     value={newUser.date}
//                     onChange={handleInputChange}
//                   />
//                 ) : (
//                   user.date
//                 )}
//               </td>
//               <td>
//                 {editingIndex === index ? (
//                   <>
//                     <button onClick={handleSave}>Save</button>
//                     <button onClick={handleCancel}>Cancel</button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Add New User</h2>
//       {showForm ? (
//         <div>
//           <input
//             type="text"
//             name="fname"
//             placeholder="First Name"
//             value={newUser.fname}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="lname"
//             placeholder="Last Name"
//             value={newUser.lname}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={newUser.email}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="salary"
//             placeholder="Salary"
//             value={newUser.salary}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="date"
//             placeholder="Date"
//             value={newUser.date}
//             onChange={handleInputChange}
//           />
//           <button onClick={handleAddUser}>Add User</button>
//         </div>
//       ) : (
//         <button onClick={() => setShowForm(true)}>New User</button>
//       )}
//     </>
//   );
// }

// export default App;
