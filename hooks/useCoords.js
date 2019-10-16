import React from 'react'

export default function useCoords() {
  const [coords, setCoords] = React.useState(null)
  function displayLocationInfo(position) {
    const {longitude, latitude} = position.coords
    setCoords({
      longitude,
      latitude
    })
  }
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }
  }, [])
  return coords
}
