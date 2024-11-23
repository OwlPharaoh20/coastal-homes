import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for styling

const PropertyMap = ({ lat, lng }) => {
  return (
    <div className="w-full h-96">
      <MapContainer
        center={[lat, lng]} // Center the map on the property location
        zoom={13} // Set default zoom level
        style={{ width: "100%", height: "100%" }}
      >
        {/* Add a tile layer (OpenStreetMap in this case) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a marker for the property location */}
        <Marker position={[lat, lng]}>
          <Popup>
            Property Location<br />Latitude: {lat}, Longitude: {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
