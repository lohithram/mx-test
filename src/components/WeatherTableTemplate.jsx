import React, { useEffect } from 'react'
import './weather-table.scss'

///////////////////////////////////////////////////////////////////////
// HOC which will accept header and widget and render as a table
///////////////////////////////////////////////////////////////////////

const WeatherTableTemplate = (Header, Widget) => (props) => {
  const {data} = props
  return (
    <section className='weather-table'>
      {
        data &&
        (
          <table className="table table-dark">
            <tbody>
              <tr>
                {
                  data.map((info, index) => (
                    <th className="text-primary" key={index}>
                      <Header info={info}/>
                    </th>
                  ))
                }
              </tr>
              <tr>
                {
                  data.map((info, index) => (
                    <td key={index}>
                      <Widget info={info}/>
                    </td>
                  ))
                }
              </tr>
            </tbody>
          </table>
        )
      }
    </section>)
}

export default WeatherTableTemplate
