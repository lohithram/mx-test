import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './weather-details.scss'
const HighLight = (props) => (
  <span className="weather-details__high-light">{props.data}</span>
)

export default function WeatherDetails(props) {
  return (
    <section className="weather-details">

      <p>Feels like <HighLight data={props.info.feelsLike}/></p>
      <p>Hi <HighLight data={props.info.tempMax}/></p>
      <p>Lo <HighLight data={props.info.tempMin}/></p>
      <p>Humidity <HighLight data={props.info.humidity}/></p>
      <p>Pressure <HighLight data={props.info.pressure}/></p>

    </section>
  )
}

WeatherDetails.propTypes = {
  info: PropTypes.shape({
    tempMax: PropTypes.string,
    tempMin: PropTypes.string,
    feelsLike: PropTypes.string,
    humidity: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
  })

}
