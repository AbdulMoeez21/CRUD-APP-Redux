import React from 'react'
 
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './UserSlice'
const EditUser = () => {
  
    const navigate=useNavigate()
    const dispatch=useDispatch(

    )
    const params=useParams()
    const users=useSelector(store=>store.users)
    const existingUser=users.filter(user=>user.id===params.id)

    const{name,email}=existingUser[0]
    const [values,setValues]=useState({
        name,
        email
    })
    const handleEdituser=()=>{
        setValues({name:'',email:''})
        //console.log(values)
        dispatch(editUser({
          id:params.id,
          name:values.name,
          email:values.email
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
      <Button onClick={handleEdituser}>Edit</Button>
    </div>
  )
  
}

export default EditUser
