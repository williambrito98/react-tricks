import React from 'react'
import GreyImg from '../../shared/greyImg'

function Planet (props) {
  if (!props.name) {
    return (
      <div>
        <h2>SEM PLANETA</h2>
      </div>
    )
  }
  if (!props.description) {
    return null
  }

  const names = ['a', 'b', 'c', 'd']

  const satellites = names.map((item) =>
    <li key={item}>Satélites {item}</li>
  )

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GreyImg img_url={props.img_url} grey={true} />
      <ul>
        {satellites}
      </ul>
    </div>
  )
}

export default Planet
