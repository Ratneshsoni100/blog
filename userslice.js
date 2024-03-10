import { createSlice } from "@reduxjs/toolkit";
import { getusers,postusers } from "./thunk/fetchusers";



const usersSlice = createSlice({
    name:'users',
    initialState:{isLoading:false,data:null,error:null},
    extraReducers(builder){
        // http GET
builder.addCase(getusers.pending,(state,action)=>{
   state.isLoading=true
}),
builder.addCase(getusers.fulfilled,(state,action)=>{
    state.isLoading=false
    state.data = action.payload;
 }),
 builder.addCase(getusers.rejected,(state,action)=>{
    state.isLoading=false
    state.error = action.error;
 }),
 //HTTTP POST
 builder.addCase(postusers.pending,(state,action)=>{
    state.isLoading=true
 }),
 builder.addCase(postusers.fulfilled,(state,action)=>{
     state.isLoading=false
    //  state.data = action.payload;
  }),
  builder.addCase(postusers.rejected,(state,action)=>{
     state.isLoading=false
     state.error = action.error;
  })
    }
})

export const usersReducer = usersSlice.reducer