import React from 'react';

const Marker = (props) => (
  <img id='marker' src="http://media.otstatic.com/img/map-marker-blue-1e9959e1eab6a1311c5bc48b4086b596.png" style={{
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'}}></img>
)

export default Marker

// style={{
//   color: 'white', 
//   background: 'grey',
//   padding: '15px 10px',
//   display: 'inline-flex',
//   textAlign: 'center',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '100%',
//   transform: 'translate(-50%, -50%)'
// }}