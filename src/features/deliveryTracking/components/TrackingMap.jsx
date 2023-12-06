import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

const TrackingMap = ({ deliveryPosition, customerLocation }) => {
  const deliveryManIcon = L.icon({
    iconUrl: "/src/assets/images/delivery-man.png",
    iconSize: [50, 50],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer center={deliveryPosition} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={deliveryPosition} icon={deliveryManIcon}>
        <Popup>Delivery</Popup>
      </Marker>
      <Marker position={customerLocation}>
        <Popup>Customer</Popup>
      </Marker>
    </MapContainer>
  );
};

TrackingMap.propTypes = {
  deliveryPosition: PropTypes.arrayOf(PropTypes.number).isRequired,
  customerLocation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TrackingMap;
