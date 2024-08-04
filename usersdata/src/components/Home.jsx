import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:4000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };



  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios.delete(`http://localhost:4000/users/${id}`)
        .then(res => {
          setData(data.filter(user => user.id !== id));
          alert("User deleted successfully!");
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-primary  vh-100'>
      {/* <h1>Users-Lists</h1> */}

      <div className='bg-white rounded w-60 border shadow p-3 '>
        <h1>Emp_Details</h1>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-stripped mt-4'>
          <thead>
            <tr>
              <th>ID</th>

              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.emp_id}</td>

                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.designation}</td>

                <td>

                  <Link to={`/update/${d._id}`} className='btn btn-success me-2 ms-2'>Edit</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(d._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
