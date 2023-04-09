
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    noOfBiscuits:50
}

const biscuitSlice = createSlice({
    name:"buiscuit",
    initialState,
    reducers: {
        ordered : (state,action)=> {
            action.payload ? state.noOfBiscuits-=action.payload : state.noOfBiscuits--
        },
        restoked : (state,action)=> {
            action.payload ? state.noOfBiscuits+=Number(action.payload) : state.noOfBiscuits++
        }
    }
})

export default biscuitSlice.reducer;
export const {ordered , restoked } = biscuitSlice.actions
