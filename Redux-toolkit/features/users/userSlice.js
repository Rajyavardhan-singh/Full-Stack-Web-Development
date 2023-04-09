const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const intialState = {
  isLoading: false,
  data: [],
  error: "",
};

//create aync thunk takes action and action type as first parameter and a functin which returns action payload as a second parameter

const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((users) => users.id));
});

const userSlice = createSlice({
  name: "user",
  intialState,
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
module.exports = userSlice.reducer 
module.exports.fetchUsers = userSlice.actions;