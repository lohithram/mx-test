import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from 'redux-thunk'
// reducers
import WeatherReducer from '../reducers/WeatherReducer'

const rootReducer = combineReducers({
  weather: WeatherReducer
})

export default function configureStore() {
  const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
  return store
}
