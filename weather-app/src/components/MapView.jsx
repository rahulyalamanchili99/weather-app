import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapView({ weather }) {
  if (!weather) return null;

  const position = [
    weather.coord.lat,
    weather.coord.lon,
  ];

  return (
    <div className="map-container">
      <h2>📍 Location Map</h2>

      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        style={{
          height: "450px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <h3>{weather.name}</h3>

            <p>{weather.weather[0].description}</p>

            <p>{Math.round(weather.main.temp)}°C</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;