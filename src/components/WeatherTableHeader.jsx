import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

export default function WeatherTableHeader(props) {
  return (
    <span>{moment(props.info.dt_txt).format("ddd, hA")}</span>
  )
}

WeatherTableHeader.propTypes = {
  info: PropTypes.shape({
    dt_txt: PropTypes.string,
  })

}
