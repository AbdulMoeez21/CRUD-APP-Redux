import React from 'react'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [values,setValues]=useState({
        name:'',
        email:''
    })
    const handleAdduser=()=>{
        setValues({name:'',email:''})
      //  console.log(values)
      dispatch(addUser({
        id: uuidv4(),
        name:values.name,
        email:values.email,
      }))
        navigate('/')
    }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField label='Name ' value={values.name}
      onChange={(e)=>setValues({...values,name:e.target.value})}
        inputProps={{type:'text',placeholder:'rao'}}
      />
      <TextField label='Email ' value={values.email}
        onChange={(e)=>setValues({...values,email:e.target.value})}
        inputProps={{type:'email',placeholder:'rao@gmail.com'}}
      />
      <Button onClick={handleAdduser}>Submit</Button>
    </div>
  )
}

export default AddUser
