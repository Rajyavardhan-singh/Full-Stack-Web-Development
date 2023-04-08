const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const UPDATE_ADDRESS = "UPDATE_ADDRESS";

const initialState = {
  name: "Rajyavardhan Singh Rathore",
  address: {
    street: "123 main street",
    pincode: 456313,
    state: "madhya pradesh",
  },
  age: 22,
};

const updateAddress = (street) => {
  return {
    type: UPDATE_ADDRESS,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state:", store.getState());

const unsub = store.subscribe(() => {
  console.log("updated state:", store.getState());
});

store.dispatch(updateAddress("456 main"));

unsub();
