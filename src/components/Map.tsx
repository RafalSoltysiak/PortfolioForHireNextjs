"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import smileMemoji from "../../public/images/memoji-smile.png";

const customIcon = new L.Icon({
  iconUrl: smileMemoji.src,
  iconSize: [80, 80],
  iconAnchor: [51.726389, 19.675],
  popupAnchor: [0, -40],
});

export default function Map() {
  return (
    <MapContainer
      center={[51.626389, 19.635]}
      zoom={9}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.726389, 19.675]} icon={customIcon}>
        <Popup>Here I am!</Popup>
      </Marker>
    </MapContainer>
  );
}
