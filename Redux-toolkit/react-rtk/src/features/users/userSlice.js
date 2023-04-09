// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
// const axios = require("axios");
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

//create aync thunk takes action and action type as first parameter and a functin which returns action payload as a second parameter

export const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/userslj")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true
    } )
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
        state.isLoading = false
        state.data = action.payload
        
    })
    builder.addCase(fetchUsers.rejected,(state,action)=> {
        state.isLoading = false
        state.data = []
        state.error = action.error.message
    })
  }
});
export default userSlice.reducer 