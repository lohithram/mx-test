import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {View1, View2} from '../components/Views'

import moment from 'moment'

// action creater / thunk
import { loadWeatherData } from '../actions'

////////////////////////////////////////////////////////////////////////////////
// This container component knows how to satisfy data dependency.
// i.e. it dispatches the right action to load the data and hydrate the store.
////////////////////////////////////////////////////////////////////////////////

export default function(props) {

  const dispatch = useDispatch()
  const weather = useSelector(state => state.weather)
  const weatherData = weather.data

  const loadData = () => {
    dispatch(loadWeatherData())
  }

  useEffect(loadData, [])

  const renderError = () =>
    weather.error &&
    (<p>{'Error loading weather data. Please refresh.'}</p>)

  const renderLoading = () =>
     weather.loading && (<p>{'Loading...'}</p>)

  return (
    <section className="weather-container">

      <button className="btn btn-primary"
              onClick={loadData}>
        Refresh
      </button>
      { renderLoading() }
      { renderError() }
      {weatherData.city && (
        <p>City name: {weatherData.city.name}</p>
      )}
      <p>View 1</p>
      <View1 data={weatherData.list}/>
      <p>View 2</p>
      <View2 data={weatherData.list}/>
    </section>)
}
