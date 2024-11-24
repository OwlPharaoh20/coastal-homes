import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PropertyMap = ({ lat, lng }) => {
  console.log("Rendering PropertyMap with coordinates:", lat, lng);

  if (!lat || !lng) {
    return <p className="text-red-500">Map coordinates not available.</p>;
  }

  return (
    <div className="w-full h-96">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>Property Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
