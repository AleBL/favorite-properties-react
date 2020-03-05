import React from "react"
import GoogleMapReact from 'google-map-react';
import { googleMapsKey, zoomDefault } from '../util/constants'
import "../css/map.css"

const Map = (props) => {
  const Marker = ({ text }) => 
  <div className="pin bounce" title={ text }>
    <div className="pulse"/>
  </div>;
  
  const localizationMap = {
    lat: props.latitude,
    lng: props.longitude
  };

  const mapOptions = {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    styles: [{ 
      featureType: 'poi', 
      elementType: 'labels', 
      stylers: [{ visibility: 'on' }] 
    }]
  };

  return (
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsKey }}
        defaultCenter={ localizationMap }
        defaultZoom={ zoomDefault } 
        options={ mapOptions } >
      
        <Marker
          lat={ localizationMap.lat }
          lng={ localizationMap.lng }
          text={ props.propertyName } />
      </GoogleMapReact>
    </div>
  );
}

export default Map;