import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import selector from '../selectors'
import WeatherInfo from './WeatherInfo'
import WeatherDetails from './WeatherDetails'
import WeatherTableHeader from './WeatherTableHeader'
import WeatherTableTemplate from './WeatherTableTemplate'

////////////////////////////////////////////////////////////////////////////////
// Following approach demonstrates how you can use various re-usable components
// to compose a view.
// For example - below you can mix and match table header and widget to create
//               View1, View2
////////////////////////////////////////////////////////////////////////////////

const CelsiusWeatherWidget = (props) => (
  <WeatherDetails info={selector(props.info.main)}/>
)

const WeatherInfoWidget = (props) => (
  <WeatherInfo info={props.info.weather}/>
)

export const View1 = WeatherTableTemplate(WeatherTableHeader, CelsiusWeatherWidget)

export const View2 = WeatherTableTemplate(WeatherTableHeader, WeatherInfoWidget)

export const SomeOtherView = WeatherTableTemplate(WeatherTableHeader, WeatherDetails)
