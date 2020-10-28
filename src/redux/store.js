import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
// import thunk from "redux-thunk";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store,persistor};