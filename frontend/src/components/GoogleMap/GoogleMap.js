import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import turfData from "../../pages/turf-data";

const mapContainerStyle = {
  width: "100%",
  height: "50%",
  overflow: "scroll",
  "overflow-x": "hidden",
  "margin-left": "-30px",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 21.7679,
      lng: 78.8718,
    },
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={4}
          containerStyle={mapContainerStyle}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          {turfData.map((data) => {
            return (
              <Marker
                position={{
                  lat: data.lat,
                  lng: data.lng,
                }}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
