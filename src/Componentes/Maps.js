import React from "react";
import GoogleMapReact from 'google-map-react';

import pointer from '../kisspng-pointer-map-location-computer-icons-5aec47e1544db4.0723775615254343373453.png';

export default function Maps ({zoom, lat, lng, height, width})  {
    const Marker = props => {
        return <div className="SuperAwesomePin"><img style={{height:"20px", width:"20px"}} src={pointer}/></div>
    }

    return(
        <div style={{ height: height, width: width }}>
            <GoogleMapReact
                apiKey={"AIzaSyC1euFcvOs-3X4TnPXhO-g5V1tDPZJZMF4"}
                defaultZoom={zoom}
                defaultCenter={{
                    lat:lat,
                    lng:lng
                }}
            >

                <Marker lat={lat} lng={lng}/>
            </GoogleMapReact>
        </div>
    );
}
