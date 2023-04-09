
// const createSlice = require('@reduxjs/toolkit').createSlice;
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    noOfCakes:10
}

const cakeSlice = createSlice({
    name:"cake",
    initialState,
    reducers: {
        ordered : (state)=>{
             state.noOfCakes--
        },
        restocked : (state,action)=>{
            state.noOfCakes += action.payload
        },
    },
})

// module.exports = cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
export default cakeSlice.reducer;
export const {ordered , restoked } = cakeSlice.actions
// console.log("fine");