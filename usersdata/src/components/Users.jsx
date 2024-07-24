import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(result => {
        setUsers(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/users/' + id)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white rounded w-50 p-3'>
      
        <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>{user.phonenumber}</td>
                <td>
                  <Link to={`/update/${user.id}`} type="button" className='btn btn-outline-success'>Update</Link>
                  <button type="button" className='btn btn-outline-danger' onClick={() => handleDelete(user.id)}>Delete</button>
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
