import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

  const UserSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
            //console.log(action)
        },
        editUser:(state,action)=>{
            const {id,name,email}=action.payload
const existingUser=state.find(user=>user.id===id)

if(existingUser){
    existingUser.name=name
    existingUser.email=email
}
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload
            const existingUser=state.find(user=>user.id===id)
            if(existingUser){
                return state.filter(user=>user.id !==id)
            }
        }
    }
  })


  export const{addUser,editUser,deleteUser}=UserSlice.actions
  export default UserSlice.reducer