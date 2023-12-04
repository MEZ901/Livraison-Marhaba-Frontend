import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

const TrackingMap = ({ position }) => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Delivery</Popup>
      </Marker>
    </MapContainer>
  );
};

TrackingMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TrackingMap;
