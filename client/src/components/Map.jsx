import React from 'react';
import MyMapComponent from './Marker.jsx';
import API_KEY from '../../../config.js';

class Map extends React.Component {
  constructor(props) {
    super(props)
    const lat = this.props.latitude;
    const lng = this.props.longitude;
    this.state = {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 15
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '20vh', width: '90%' }} id="map">
        <MyMapComponent
          isMarkerShown
          location={this.state.center}
          zoom={this.state.zoom}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY.API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `19vh`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />} 
        />
      </div>
    );
  }
}

export default Map;