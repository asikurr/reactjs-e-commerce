import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store,persistor};