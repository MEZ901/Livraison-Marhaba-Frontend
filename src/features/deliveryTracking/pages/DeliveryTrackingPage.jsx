import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUpdateDeliveryLocationMutation } from "../redux/deliveryTrackingApiSlice";

const DeliveryTrackingPage = () => {
  const [position, setPosition] = useState([0, 0]);
  const [updateDeliveryLocation] = useUpdateDeliveryLocationMutation();

  useEffect(() => {
    const updateLocalisationInDb = async (position) => {
      try {
        await updateDeliveryLocation({
          deliveryId: "123456",
          location: position,
        }).unwrap();
      } catch (error) {
        console.log(error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        try {
          updateLocalisationInDb([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          setPosition([position.coords.latitude, position.coords.longitude]);
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [updateDeliveryLocation]);

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
