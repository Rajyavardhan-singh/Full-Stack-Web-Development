

import {createSlice} from '@reduxjs/toolkit';
import cakeOrdered from '../cake/cakeSlice'
const initialState = {
  noOfIceCream: 20,
};
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if(!action.payload){
        state.noOfIceCream--;
      }else{
        state.noOfIceCream-=action.payload;
      }
    },
    restocked: (state,action) => {
        state.noOfIceCream += action.payload
    }
  },
  extraReducers: 
  // ['cake/ordered']: (state)=> {
  //   state.noOfIceCream--
  // }
  builder => builder.addCase(cakeOrdered, state => {
    state.noOfIceCream--
  })

});

export default iceCreamSlice.reducer;
export const {ordered , restoked } = iceCreamSlice.actions


// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions ;

