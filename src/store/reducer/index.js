const initialState = {
    age: 20,
    todos: {}
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'SET_TODOS':
            newState.todos = action.payload;
            break;

        case 'AGE_DOWN':
            newState.age -= action.payload;
            break;
        case 'GET_TODOS_ERROR':
            newState.todoGetError = action.payload;
            break;

    }
    return newState;
};

export default reducer;