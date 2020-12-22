let todoId = 1

export const addTodo = (payload) => {
    let action = {type: 'AddTodo', payload: {...payload, status: 'To Do', id: todoId}};
    todoId++;
    return action;
};

export const removeTodo = (payload) => ({type: 'RemoveTodo', payload});

export const toInProgress = (payload) => ({type: 'ToInProgress', payload});

export const toDone = (payload) => ({type: 'ToDone', payload});