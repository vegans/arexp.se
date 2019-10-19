import React from 'react';

export default ({info}) => {
  if (!info) {
    return null
  }
  return (
    <div>
      <div style={{maxWidth: 300}}>
        <h2>{info.city} <span style={{fontSize: '0.6em'}}>({info.country})</span></h2>
        <p>Reach out here: <a target="_blank" href={info.link}>{info.link}</a></p>
      </div>
    </div>
  )
}
