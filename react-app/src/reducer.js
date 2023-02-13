import * as actions from "./actionType";

//central storage (state)
const initState = {
  count: 0,
  movieData: [
    {
      id: 1,
      name: "Bandersnatch",
      price: "$10",
    },
    {
      id: 2,
      name: "Harry Potter",
      price: "$20",
    },
    {
      id: 3,
      name: "marvel series",
      price: "$30",
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC:
      return { ...state, count: state.count + action.payload };
    case actions.DEC:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default reducer;
