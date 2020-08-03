import axios from 'axios'
import * as types from './types'
export const loadWeatherData = (cityId='2643743') => (dispatch) => {

  dispatch({type: 'LOAD_WEATHER_DATA'})

  getWeatherService({id: cityId})
  .then(response => {
    if(Math.random() > 0.5)
      dispatch({type: types.LOAD_WEATHER_DATA_SUCCESS, data: response.data})
    else
      dispatch({type: types.LOAD_WEATHER_DATA_FAILURE, error: 'Failed randomly'})
  })
  .catch(error => {
    dispatch({type: types.LOAD_WEATHER_DATA_FAILURE, error})
  })
}


///////////////////////////////////////////////////////////////////////
// Ideally the below service will be in a separate file either as a
// API service or could also be middleware if it fits better the needs
// of the UI architecture
// The idea is service interaction details are not the concern of
// action creators. You could get data from various source and different
// interface like HTTP or RPC or web-sockets etc..
///////////////////////////////////////////////////////////////////////

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/forecast'

const getWeatherService = (params) => {
  const augmentedParams = {...params,
    appId: '416f21735638892910fc788dbd92dc24'}
  return axios.get( WEATHER_API_URL,  {params: augmentedParams})
}
