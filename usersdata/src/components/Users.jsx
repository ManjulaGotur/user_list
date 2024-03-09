import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


const Users = () => {
 const [users,setUsers] =useState([])
  // const users = [
  //   { id: 1, name: 'kumaran', email: 'kumaran@gmail.com',  designation: "sales", phonenumber: '9865552588'},
  //   { id: 2, name: 'Manjula', email: 'mrg@gmail.com', designation: "hr",phonenumber:"6789345520" },
   
  // ];


  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])


  const handleDelete = (id) =>{
    axios.delete('http://localhost:3001/deleteUsers/'+id)
    .then(res =>  {console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
  }
  console.log("check==",users);
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white rounded w-50 p-3'>
        <h3>Users-Lists</h3>
        <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                65<td>{user.phonenumber}</td>
                <td>
                <Link to={`/update/${user._id}`}  type="button"  className='btn btn-outline-success'>Update</Link>
                  <button  type="button"   className='btn btn-outline-danger'
                     onClick={(e)=> handleDelete(user._id)}>Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
