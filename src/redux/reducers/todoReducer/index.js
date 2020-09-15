const initialState = {
  todoInput: "",
  todolist: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, todoInput: action.payload };
    case "ADD_TODO":
      return { ...state, todolist: [...state.todolist, action.payload] };
    default:
      return state;
  }
};

export default todoReducer;
