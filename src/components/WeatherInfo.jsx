// TODO: Prop types
import React, { useEffect } from 'react'

export default function (props) {
  const { info } = props
  return (
    <section>
      {info.map((data, index) => (
        <React.Fragment key={index}>
          <p>{data.main}</p>
          <p>{data.description}</p>
        </React.Fragment>
      ))}
    </section>
  )
}
