const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const biscuitReducer = require('../features/biscuits/biscuitSlice')

//thunk 
const userReducer = require('../features/users/userSlice');


const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
        biscuit:biscuitReducer,
        user:userReducer
    }
})

module.exports = store