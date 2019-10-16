import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl} from 'react-map-gl';
import CityInfo from './Info';
import CityPin from './Pin';
import {fullscreenControlStyle, navStyle} from './styles'
import CITIES from '../../data/groups.js';

// TODO: Don't store this here and revoke this token after
const TOKEN = 'pk.eyJ1IjoiYmVuamljayIsImEiOiJjaWlidGRuNnIwMDQ4d3FtMDFwbG1vYmE3In0.vbfWV0HNWr7wNyXrCWBEkw';

export default () => {
  const [popupInfo, setPopupInfo] = React.useState(null)
  const [viewport, setViewport] = React.useState({
    latitude: 59.888409937572646,
    longitude: 15.84397813661865,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  })

  function _renderPopup() {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.coords.longitude}
          latitude={popupInfo.coords.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    )
  }

  function _renderCityMarker(city, index) {
    return (
      <Marker key={`marker-${index}`} longitude={city.coords.longitude} latitude={city.coords.latitude}>
        <CityPin size={20} onClick={() => setPopupInfo(city)} />
      </Marker>
    )
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="500px"
      mapStyle="mapbox://styles/benjick/ck1t54q2a071j1clzqkqx54bj"
      onViewportChange={setViewport}
      mapboxApiAccessToken={TOKEN}
    >
      {CITIES.map(_renderCityMarker)}

      {_renderPopup()}

      <div className="fullscreen" style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>
      <div className="nav" style={navStyle}>
        <NavigationControl />
      </div>
    </MapGL>
  )
}
