import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrackingMap from "../components/TrackingMap";
import useSocket from "../../../hooks/useSocket";
import { selectCurrentUser } from "../../auth/redux/authSelectors";

const DeliveryTrackingPage = () => {
  const [position, setPosition] = useState([0, 0]);
  const socket = useSocket();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const updateLocalisationInDb = async (position) => {
      try {
        socket.emit("deliveryLocation", {
          deliveryId: user.id,
          location: position,
        });
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
  }, [socket, user.id]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {position[0] === 0 && position[1] === 0 ? (
        <h1>loading...</h1>
      ) : (
        <TrackingMap position={position} />
      )}
    </div>
  );
};

export default DeliveryTrackingPage;
