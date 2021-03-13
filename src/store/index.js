import { createStore ,compose ,applyMiddleware } from 'redux';
import reducer from './reducer/index';
import myAsyncFunc from './../sagas/sagas';
import createSagaMiddleware from 'redux-saga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// then run the saga

export const store = createStore(reducer,compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(myAsyncFunc)
