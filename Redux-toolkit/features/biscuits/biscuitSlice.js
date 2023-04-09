
const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    noOfBuiscuits:50
}

const biscuitSlice = createSlice({
    name:"buiscuit",
    initialState,
    reducers: {
        ordered : (state,action)=> {
            action.payload ? state.noOfBuiscuits-=action.payload : state.noOfBuiscuits--
        },
        restoked : (state,action)=> {
            action.payload ? state.noOfBuiscuits+=action.payload : state.noOfBuiscuits++
        }
    }
})

module.exports = biscuitSlice.reducer;
module.exports.buiscuitActions = biscuitSlice.actions;
