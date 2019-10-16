import React from 'react'
import Page from '../../layouts/main'
import Group from '../../components/Group'
import Link from 'next/link'
import useCoords from '../../hooks/useCoords'
import groups from '../../data/groups'
import haversine from 'haversine'
import Text from '../../components/Text'
import Map from './Map'

const FindGroup = () => {
  const coords = useCoords()
  let groupsCopy = groups
  if (coords) {
    groupsCopy = groupsCopy.map(group => ({
      ...group,
      distance: haversine(group.coords, coords)
    })).sort((a,b) => a.distance - b.distance)
  }
  const groupsMatrix = {}
  groupsCopy.sort((a,b) => a.country - b.country).forEach(group => {
    groupsMatrix[group.country] ? groupsMatrix[group.country].push(group) : groupsMatrix[group.country] = [group]
  })
  return (
    <Page>
      <Map />
      <Text>
        {coords && (
          <>
            <h3>Closest groups we could find</h3>
            <ul>
              {groupsCopy.slice(0, 10).map(group => <Group key={group.country + group.city} group={group} />)}
            </ul>
          </>
        )}
        <h3>All groups</h3>
        <ul>
          {Object.keys(groupsMatrix).map(country => (
            <li key={country}>
              {country}
              <ul>
                {Object.values(groupsMatrix[country]).map(group => <li key={group.country + group.city}>{group.city}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Text>
    </Page>
  )
}

export default FindGroup
