import { appReducer } from './reducers/appReducers';

import { combineReducers } from 'redux';

import { weatherReducer } from './reducers/weatherReducer';

import { persistReducer } from 'redux-persist';

import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['weather']

};
export const rootReducer = combineReducers({
    app: appReducer,
    weather: weatherReducer
});

const persist = persistReducer<any, any>(persistConfig, rootReducer)

export default persist
