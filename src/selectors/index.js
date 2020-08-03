
///////////////////////////////////////////////////////////////////////
// Selectors / formatters to display formatted data.
// Note: The selector can be enhanced to accept formatting parameters
//       like Celsius, Farenheight etc..
//
// Used getter function - has few benefits.
// 1. Encapsulates underlying data
// 2. Protects from accidental mutation
///////////////////////////////////////////////////////////////////////

export default function selector(info) {
  return {...info,
    get tempMax() {
      return kelvinToC(info.temp_max)
    },
    get tempMin() {
      return kelvinToC(info.temp_min)
    },
    get feelsLike() {
      return kelvinToC(info.feels_like)
    },
    get humidity() {
      return `${info.humidity}%`
    },
    get pressure() {
      return `${info.pressure} mb`
    }
  }
}


const kelvinToC = data => `${Math.round(data - 273.15)}°`
