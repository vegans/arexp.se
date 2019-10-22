import React from 'react'

const Group = ({group}) => (
  <li>
    {group.city} ({group.distance && `${group.distance.toFixed(0)} km`})
  </li>
)

export default Group
