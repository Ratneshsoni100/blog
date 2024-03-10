import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../store/thunk/fetchusers'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AllData() {

let alldata = useSelector(state=>state.usersdata)
console.log(alldata);

let dispatch = useDispatch()

useEffect(()=>{
  dispatch(getusers())
},[])

  return (
    <div className='d-flex justify-content-center my-4 align-items-center flex-column' 
    >
      {
        alldata.data && alldata.data.map(ele=>{
          let descrip = ele.description.slice(0,60)+'.......'
          return     <Card key={ele.id} className='my-4' style={{ width: '18rem' }}>
          <Card.Img style={{height:'150px'}} variant="top" src={ele.image} />
          <Card.Body>
            <Card.Title>{ele.name}</Card.Title>
            <h3>{ele.email}</h3>
            <Card.Text>
            {descrip}
            </Card.Text>
            <Button className='ms-2' variant="warning">Preview</Button>
            <Button className='ms-2' variant="info">Edit</Button>
            <Button className='ms-2' variant="danger">Delete</Button>
          </Card.Body>
        </Card>
        })
      }
    </div>
  )
}

export default AllData