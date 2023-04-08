// const redux = require("redux");
// const CAKE_ORDERED = "CAKE_ORDERED";
// const RESTOKED = "RESTOKED";
// const createStore = redux.createStore;
// const initialState = {
//   noOfCake: 10,
// };

// const orderPlaced = () => {
//   return {
//     type: CAKE_ORDERED,
//     quantity: 1,
//   };
// };

// const restock = (quant = 1) => {
//   return {
//     type: RESTOKED,
//     quantity: quant,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         noOfCake: state.noOfCake - 1,
//       };
//       break;
//     case RESTOKED:
//       return {
//         ...state,
//         noOfCake: state.noOfCake + action.quantity,
//       };
//       break;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// console.log("initial state hai ", store.getState());

// const unsbcribe = store.subscribe(() =>
//   console.log("updated state", store.getState())
// );

// store.dispatch(orderPlaced());
// store.dispatch(orderPlaced());

// store.dispatch(orderPlaced());

// store.dispatch(orderPlaced());

// store.dispatch(orderPlaced());

// store.dispatch(restock(15));

// unsbcribe();

// ==================================================================
// multiple reducers

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// middleware configurations 
const createLogger = require("redux-logger").createLogger;
const logger = createLogger();
const applyMiddleware = redux.applyMiddleware;


//cake constants
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// ice cream constants
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// states

const initialCakeState = {
  noOfCakes: 10,
};

const initialIceCreamState = {
  noOfIceCream: 20,
};

// cake actions
const cakeOrdered = (quant = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: quant,
  };
};
const cakeRestocked = (quant = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quant,
  };
};

// ice cream actions
const iceCreamOrdered = (quant = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: quant,
  };
};
const iceCreamRestocked = (quant = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quant,
  };
};

//cakeReducer
function cakeReducer(state = initialCakeState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
}

function iceCreamReducer(state = initialIceCreamState, action) {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream + action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state: ", store.getState());
});

const actions = redux.bindActionCreators(
  { cakeOrdered, cakeRestocked, iceCreamOrdered, iceCreamRestocked },
  store.dispatch
);

actions.cakeOrdered(3);
actions.cakeRestocked(4);
actions.cakeOrdered();

actions.iceCreamOrdered(10);
actions.iceCreamOrdered();
actions.iceCreamRestocked(11);

unsubscribe();
