import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrackingMap from "../components/TrackingMap";
import useSocket from "../../../hooks/useSocket";
import { selectCurrentUser } from "../../auth/redux/authSelectors";

const DeliveryTrackingPage = () => {
  const [position, setPosition] = useState([0, 0]);
  const [customerLocation, setCustomerLocation] = useState([31.6398, -8.0101]);
  const [isLoading, setIsLoading] = useState(true);
  const socket = useSocket();
  const user = useSelector(selectCurrentUser);

  const updateDeliveryLocation = (position) => {
    try {
      socket?.emit("updateDeliveryLocation", {
        deliveryId: user.id,
        location: position,
      });
    } catch (error) {
      console.log("Error updating delivery location:", error);
    }
  };

  const handleGeolocationSuccess = (currentPosition) => {
    try {
      const newPosition = [
        currentPosition.coords.latitude,
        currentPosition.coords.longitude,
      ];
      setPosition(newPosition);
      updateDeliveryLocation(newPosition);
      setIsLoading(false);
    } catch (error) {
      console.log("Error handling geolocation:", error);
    }
  };

  const handleGeolocationError = (error) => {
    console.error("Error getting location:", error);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user.roles.includes("delivery")) {
      const watchId = navigator.geolocation.watchPosition(
        handleGeolocationSuccess,
        handleGeolocationError
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      socket?.emit("getDeliveryLocation", {
        deliveryId: "656c71c69a4d3371de3f8319",
      });
    }
  }, [socket, user]);

  useEffect(() => {
    const handleDeliveryLocation = (data) => {
      if (!data.error) {
        setIsLoading(false);
        setPosition(data.location);
      } else {
        console.log("Error fetching delivery location:", data.error);
      }
    };

    socket?.on("deliveryLocation", handleDeliveryLocation);

    return () => {
      socket?.off("deliveryLocation", handleDeliveryLocation);
    };
  }, [socket]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <TrackingMap
          deliveryPosition={position}
          customerLocation={customerLocation}
        />
      )}
    </div>
  );
};

export default DeliveryTrackingPage;
