import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




const UpdateUser = () => {
  const{id }= useParams()
    const[name,setName]=useState('')
  const[email,setEmail] =useState('')
  const[designation,setDesignation]=useState('')
  const[phonenumber,setPhonenumber] =useState('');
  const navigate =useNavigate()

 
  useEffect(()=>{
    axios.get('http://localhost:3001/getUser'+id)
    .then(result => {
    setName(result.data.name);
    setEmail(result.data.email)
    setDesignation(result.data.designation)
    setPhonenumber(result.data.phonenumber)
  })
    .catch(err => console.log(err))
  },[id])

const Update = (e) =>{
  e.preventDefault()
  axios.put('http://localhost:3001/updateUser/'+id, {name, email,designation,phonenumber})
    .then(result =>{
        console.log(result)
        navigate('/user-list')
    }).catch(err => console.log(err)  )

    }



    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-50'>
        <h2>Update-Users</h2>
    <form action='' onSubmit={Update}>
      <div className='mb-2 '>
          <label htmlFor='name'><strong>Name:</strong></label>
          <input type="name"  placeholder='Enter your name'  name='name'
         className='form-control rounded-0'  value = {name} onChange={e => setName(e.target.value)} />
            
      </div>
      <div className='mb-2'>
          <label htmlFor='email'><strong >Email:</strong></label>
          <input type="email"  placeholder='Enter your email'  name='email'
        className='form-control rounded-0'  value ={email} onChange={e => setEmail(e.target.value)}  />
           
      </div>

      <div className='mb-2'>
          <label htmlFor='designation'><strong>Designation:</strong></label>
          <input type="designation"  placeholder='Enter your designation' name='designation'
         className='form-control rounded-0'   value = {designation} onChange={e => setDesignation(e.target.value)} />
        
      </div>
      <div className='mb-2'>
          <label htmlFor='number'><strong>phonenumber:</strong></label>
          <input type="phonenumber"  placeholder='Enter your phonenumber' name='phonenumber'
         className='form-control rounded-0'  value = {phonenumber}  onChange={e => setPhonenumber(e.target.value)} />
        
      </div>
      
      <button  className='btn btn-primary'>Update</button>
    </form>
    </div>
  </div>
  )
}
export default UpdateUser
