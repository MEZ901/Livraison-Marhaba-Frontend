import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrackingMap from "../components/TrackingMap";
import useSocket from "../../../hooks/useSocket";
import { selectCurrentUser } from "../../auth/redux/authSelectors";

const DeliveryTrackingPage = () => {
  const [position, setPosition] = useState([0, 0]);
  const [customerLocation] = useState([31.6398, -8.0101]);
  const [isLoading, setIsLoading] = useState(true);
  const socket = useSocket();
  const user = useSelector(selectCurrentUser);

  const [index, setIndex] = useState(0);

  const localisations = [
    [31.6298, -8.0101],
    [31.6298, -8.0102],
    [31.6298, -8.0103],
    [31.6298, -8.0104],
    [31.6298, -8.0105],
    [31.6298, -8.0106],
    [31.6298, -8.0107],
    [31.6298, -8.0108],
    [31.6298, -8.0109],
    [31.6298, -8.011],
    [31.6298, -8.0111],
    [31.6298, -8.0112],
    [31.6298, -8.0113],
    [31.6298, -8.0114],
    [31.6298, -8.0115],
    [31.6298, -8.0116],
    [31.6298, -8.0117],
    [31.6298, -8.0118],
    [31.6298, -8.0119],
    [31.6298, -8.012],
    [31.6298, -8.0121],
    [31.6298, -8.0122],
    [31.6298, -8.0123],
    [31.6298, -8.0124],
    [31.6298, -8.0125],
    [31.6298, -8.0126],
    [31.6298, -8.0127],
    [31.6298, -8.0128],
    [31.6298, -8.0129],
    [31.6298, -8.013],
    [31.6298, -8.0131],
    [31.6298, -8.0132],
    [31.6298, -8.0133],
    [31.6298, -8.0134],
    [31.6298, -8.0135],
    [31.6298, -8.0136],
    [31.6298, -8.0137],
    [31.6298, -8.0138],
    [31.6298, -8.0139],
    [31.6298, -8.014],
    [31.6298, -8.0141],
  ];

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
  }, [socket]);

  setTimeout(() => {
    if (index < localisations.length) {
      setPosition(localisations[index]);
      setIndex(index + 1);
    }
  }, 1000);

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
