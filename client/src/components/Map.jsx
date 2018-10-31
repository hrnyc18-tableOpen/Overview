import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx'
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
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
      <div style={{ height: '20vh', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC2QaY-vYXNOi7fXEW0m1Ux3ZLDw5osvhk' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker lat={this.state.center.lat} lng={this.state.center.lng} text={'abc'}/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;