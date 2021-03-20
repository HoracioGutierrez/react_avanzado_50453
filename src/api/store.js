import {createStore,applyMiddleware,compose} from "redux"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store

//saga root - button -> 1er action -> saga watcher -> saga worker -> 2da action -> reducer