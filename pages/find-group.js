import React from 'react'
import Page from '../layouts/main'
import Hero from '../components/Hero'
import Group from '../components/Group'
import Link from 'next/link'
import useCoords from '../hooks/useCoords'
import groups from '../data/groups'
import haversine from 'haversine'
import Text from '../components/Text'

const FindGroup = () => {
  const coords = useCoords()
  let groupsCopy = groups
  if (coords) {
    groupsCopy = groupsCopy.map(group => ({
      ...group,
      distance: haversine(group.coords, coords)
    })).sort((a,b) => a.distance - b.distance).slice(0, 10)
  }
  const groupsMatrix = {}
  groupsCopy.sort((a,b) => a.country - b.country).forEach(group => {
    groupsMatrix[group.country] ? groupsMatrix[group.country].push(group) : groupsMatrix[group.country] = [group]
  })
  return (
    <Page>
      <Hero>Find your local group</Hero>
      <Text>
        {coords && (
          <>
            <h3>Closest groups we could find</h3>
            <ul>
              {groupsCopy.map(group => <Group key={group.country + group.city} group={group} />)}
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
