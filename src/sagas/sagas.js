import {takeEvery, takeLatest, call, put, delay } from 'redux-saga/effects'


function* fetchTodo() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos?_limit=5');
        const responseBody = yield response.json();
        console.log("responseBody",responseBody)
        yield put({
            type: "SET_TODOS",
            payload: responseBody
        })

    } catch (error) {
        yield put({
            type: "GET_TODOS_ERROR",
            payload: error
        })

    }
}

function* createTodo(action) {
    console.log("createTodo",action)
    const create= yield call(fetch,"https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        body: "formData"
      })
    const responseBody = yield create.json();
        console.log("responseBody",responseBody)
}

function* myAsyncFunc() {
    yield takeLatest("TODO_FETCH_REQUESTED", fetchTodo);
    yield takeLatest("CREATE_TODO", createTodo);
    
}

export default myAsyncFunc;