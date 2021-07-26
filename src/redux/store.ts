import { applyMiddleware,  createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";

import { IWeatherIntialState } from './reducers/weatherReducer';
import persist from './rootReducer'
import { IAppState } from './reducers/appReducers';



export type AppStore = {
  app: IAppState;
  weather: IWeatherIntialState;
};

export const store = createStore(persist, applyMiddleware(thunk));

export const persistor = persistStore(store);
