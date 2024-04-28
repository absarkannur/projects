import React from 'react';
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import { GoogleMapsEmbed } from '@next/third-parties/google'

const GoogleMap = function() {
    return (
        <section className="container-flid">
            <GoogleMapsEmbed
                apiKey="AIzaSyDrzBShlAYHsVs1PU9Yp-kWiMxPc1sRXxM"
                height={300}
                width="100%"
                mode="place"
                q="Concord+Tower"
            />
        </section>
    )
}

export default GoogleMap;