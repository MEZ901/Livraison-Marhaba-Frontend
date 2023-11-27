import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const DeliveryTrackingPage = () => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {position[0] === 0 && position[1] === 0 ? (
        <h1>loading...</h1>
      ) : (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Delivery</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default DeliveryTrackingPage;
