const initialState = [];
var i

const todos = (state = initialState, action) => {
  switch(action.type) {
    
    case 'AddTodo':
      return state = state.concat(action.payload);
    case 'RemoveTodo':
      return state = state.filter(todo => todo.id !== action.payload);
    case 'ToInProgress':
      i = 0;
      while(i < state.length){
        if(state[i].id === action.payload){
          state[i].status = 'In Progress'
        }
        i++
      }
      return state;
    case 'ToDone':
      i = 0;
      while(i < state.length){
        if(state[i].id === action.payload){
          state[i].status = 'Done'
        }
        i++
      }
      return state;
    default: 
      return state;
  }
}

export default todos;
