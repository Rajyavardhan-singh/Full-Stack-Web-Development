// const configureStore = require('@reduxjs/toolkit').configureStore;
import { configureStore } from '@reduxjs/toolkit';
// const cakeReducer = require('../features/cake/cakeSlice');
import cakeReducer from '../features/cake/cakeSlice';
// const iceCreamReducer = require('../features/icecream/icecreamSlice')
import iceCreamReducer from '../features/icecream/icecreamSlice';
// const biscuitReducer = require('../features/biscuits/biscuitSlice')
import biscuitReducer from '../features/biscuits/biscuitSlice'

//thunk 
// const userReducer = require('../features/users/userSlice');
import  userReducer  from '../features/users/userSlice';


const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
        biscuit:biscuitReducer,
        user:userReducer
    }
})

// module.exports = store
export default store;