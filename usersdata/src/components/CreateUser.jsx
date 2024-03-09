import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const CreateUser = () => {
    const[name,setName]=useState('')
    const[email,setEmail] =useState('')
    const[designation,setDesignation]=useState('')
    const[phonenumber,setPhonenumber] =useState('')
    const navigate =useNavigate()

const Submit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/createUsers', {name, email,designation,phonenumber})
    .then(result =>{
        console.log(result)
        navigate('/user-list')
    }).catch(err => console.log(err)  )

    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-50'>
        <h2>Add-Users</h2>
    <form action=''  onSubmit={Submit} >
      <div className='mb-2 '>
          <label htmlFor='name'><strong>Name:</strong></label>
          <input type="name"  placeholder='Enter your name'  name='name'
         className='form-control rounded-0' value={name}
         onChange={e => setName(e.target.value)}   />
            
      </div>
      <div className='mb-2'>
          <label htmlFor='email'><strong >Email:</strong></label>
          <input type="email"  placeholder='Enter your email'  name='email'  value ={email}
        className='form-control rounded-0'  onChange={e => setEmail(e.target.value)} />
           
      </div>
      <div className='mb-2'>
          <label htmlFor='designation'><strong>Designation:</strong></label>
          <input type="designation"  placeholder='Enter your designation' name='designation'
         className='form-control rounded-0' value = {designation}  onChange={e => setDesignation(e.target.value)}  />
        
      </div>
      <div className='mb-2'>
          <label htmlFor='number'><strong>phonenumber:</strong></label>
          <input type="phonenumber"  placeholder='Enter your number' name='number'
         className='form-control rounded-0'  value = {phonenumber}  onChange={e => setPhonenumber(e.target.value)}  />
        
      </div>
      
      <Link to="/user-list"  className='btn btn-secondary'>Create</Link>
    </form>
    </div>
  </div>
  )
}
  
export default CreateUser;
