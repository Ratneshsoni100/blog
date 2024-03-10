import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getusers = createAsyncThunk('users/getdata',async()=>{
    let response = await axios.get(`http://localhost:4000/users`)
    return response.data 
})

export const postusers = createAsyncThunk('users/postusers',async(para)=>{
let response = await axios.post(`http://localhost:4000/users`,para)
return response.data
})