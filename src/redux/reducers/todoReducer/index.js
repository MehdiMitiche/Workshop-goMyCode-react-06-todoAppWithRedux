const initialState = {
  todoInput: "",
  todolist: [],
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };

    /* case "UPDATE_INPUT":
      return { ...state, todoInput: action.payload };
    case "SET_TODOLIST":
      return { ...state, todolist: action.payload };*/
    default:
      return state;
  }
};

export default todoReducer;
