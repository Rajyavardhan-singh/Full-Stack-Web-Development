const store = require('./app/store');
const { biscuitActions } = require('./features/biscuits/biscuitSlice');

const cakeActions = require('./features/cake/cakeSlice').cakeActions; 
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions;
// const biscuitActions = require('./features/biscuits/biscuitSlice')/biscuitActions;
const {fetchUsers} = require('./features/users/userSlice')
console.log("intial state", store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("updated state: ",store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(11));
// store.dispatch(iceCreamActions.ordered(10));
// store.dispatch(biscuitActions.ordered(10));
// store.dispatch(biscuitActions.restoked(20));
store.dispatch(fetchUsers());
// unsubscribe();