import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
    return (
        <>
            <Map
                google={props.google}
                zoom={14}
                initialCenter={{
                    lat: 37.7749,
                    lng: -122.4194,
                }}
            />
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAvaiEO4e5ck8Xzkm79rkIrGLtgNVseHzY',
})(MapContainer);
