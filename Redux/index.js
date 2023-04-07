const redux = require("redux");
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOKED = "RESTOKED";
const createStore = redux.createStore;
const initialState = {
  noOfCake: 10,
};

const orderPlaced = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const restock = (quant = 1) => {
  return {
    type: RESTOKED,
    quantity: quant,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
      break;
    case RESTOKED:
      return {
        ...state,
        noOfCake: state.noOfCake + action.quantity,
      };
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state hai ", store.getState());

const unsbcribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(orderPlaced());
store.dispatch(orderPlaced());

store.dispatch(orderPlaced());

store.dispatch(orderPlaced());

store.dispatch(orderPlaced());

store.dispatch(restock(15));

unsbcribe();
