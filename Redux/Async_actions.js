
// const redux = require('redux');
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunk = require('redux-thunk').default;
// const axios = require('axios');

// const initialState = {
//     isLoading:false,
//     data : [],
//     error: ''
// }

// const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
// const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
// const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// function fetchUserRequested () {
//     return {
//         type:FETCH_USERS_REQUESTED,
//     }
// }
// function fetchUserSucceeded (users) {
//     return {
//         type:FETCH_USERS_SUCCEEDED,
//         payload:users,
//     }
// }
// function fetchUserFailed (error) {
//     return {
//         type: FETCH_USERS_FAILED,
//         payload : error ,

//     }
// }

// //Reducer
// function reducer (state = initialState,action){
//     switch(action.type){
//         case fetchUserRequested :
//             return {
//                 ...state,
//                 isLoading:true
//             }
//         case fetchUserSucceeded :
//             return {
//                 ...state,
//                 isLoading:false,
//                 data : action.payload,
//             }
//         case fetchUserFailed : 
//             return {
//                 ...state,
//                 isLoading:false,
//                 error: action.payload,
//             }        
//     }
// }

// // store 
// const store = createStore(reducer,applyMiddleware(thunk));

// function fetchUsers(){
//    return function(dispatch) {dispatch(fetchUserRequested());
//     axios.get('https://jsonplaceholder.typicode.com/users').then(
//         (response) => {
//           const users = response.data.map(user => user.id)
//           dispatch(fetchUserSucceeded(users))
//         }
        
//     ).catch((error)=>{
//         dispatch(fetchUserFailed(error.message))
//     })}
// }

// console.log("intial state ",store.getState());
// store.subscribe(()=> {
//     console.log("updated state : ", store.getState())
// })
// store.dispatch(fetchUsers())

const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const axios = require('axios');

const initialState = {
    isLoading: false,
    data: [],
    error: ''
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

function fetchUserRequested() {
    return {
        type: FETCH_USERS_REQUESTED,
    };
}

function fetchUserSucceeded(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
}

function fetchUserFailed(error) {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
}

//Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USERS_REQUESTED':
            return {
                ...state,
                isLoading: true,
            };
        case 'FETCH_USERS_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case 'FETCH_USERS_FAILED':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

// store
const store = createStore(reducer, applyMiddleware(thunk));

// async action creator which returns a function
function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUserRequested());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUserSucceeded(users));
            })
            .catch((error) => {
                dispatch(fetchUserFailed(error.message));
            });
    };
}

console.log('initial state ', store.getState());
store.subscribe(() => {
    console.log('updated state: ', store.getState());
});
store.dispatch(fetchUsers());
