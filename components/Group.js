import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Group = ({group}) => (
  <li>{group.city} ({group.distance && `${group.distance.toFixed(0)} km`})</li>
)

export default Group
