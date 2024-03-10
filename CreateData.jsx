import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postusers } from '../store/thunk/fetchusers';

function CreateData() {
  let [data,setdata] = useState({
    name:'JAY',password:'',email:'',description:'',image:''
  })

let handleChnage =(e) =>{
setdata(
  {...data,[e.target.name]:e.target.value}
)
}

let dispatch = useDispatch()

let handlesubmit = (e) =>{
e.preventDefault()
// console.log('ok');
console.log(data);
dispatch(postusers(data))
}

  return (
    <div>
      <h1>CREATE DATA</h1>
      <form onSubmit={handlesubmit} >
      <Form.Control 
      name='name'
      value={data.name}
      onChange={handleChnage}
      className='my-4 w-50 m-auto' type="text" placeholder="NAME" />
      <Form.Control
        name='email'
        value={data.email}
        onChange={handleChnage}
      className='my-4 w-50 m-auto' type="text" placeholder="EMAIL" />
      <Form.Control
        name='password'
        value={data.password}
        onChange={handleChnage}
      className='my-4 w-50 m-auto' type="text" placeholder="PASSWORD" />
      <Form.Control 
        name='image'
        value={data.image}
        onChange={handleChnage}
      className='my-4 w-50 m-auto' type="text" placeholder="IMAGE" />
    
        <Form.Control
          name='description'
          value={data.description}
          onChange={handleChnage}
        className='my-4 w-75 m-auto'
          as="textarea"
          placeholder="Content for your blog"
          style={{ height: '100px' }}
        />
 
 <button className='d-block w-75 m-auto btn btn-success' type='submit'>CREATE BLOG</button>

      </form>
    </div>
  )
}

export default CreateData