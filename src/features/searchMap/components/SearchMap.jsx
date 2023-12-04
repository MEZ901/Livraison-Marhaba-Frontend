import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { resto, user } from "../../../assets/images";
import LeafletGeocoder from "../components/LeafletGeocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import { useGetAllRestosQuery } from "../redux/searchMapApiSlice";


const SearchMap = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const { data: restaurants, isLoading } = useGetAllRestosQuery();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition([latitude, longitude]);
      });
    }
  }, []);


  const currentPositionIcon = L.icon({
    iconUrl: user,
    iconSize: [40, 40],
    iconAnchor: [16, 16],
  });

  const restaurantIcon = L.icon({
    iconUrl: resto,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <div>
      {currentPosition !== null ? (
        <MapContainer center={currentPosition} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {currentPosition && (
            <Marker position={currentPosition} icon={currentPositionIcon}>
              <Popup> My location </Popup>
            </Marker>
          )}
          {!isLoading &&
            Array.isArray(restaurants?.restaurants) &&
            restaurants?.restaurants.map((restaurant) => {
              const reversedCoordinates = [...restaurant.location.coordinates].reverse();
              return (
                <Marker
                  key={restaurant._id}
                  position={reversedCoordinates}
                  icon={restaurantIcon}
                >
                  <Popup>{restaurant.name}</Popup>
                </Marker>
              );
            })}
          <LeafletGeocoder />
        </MapContainer>
      ) : (
        <div>Loading...</div>
      )}  
    </div>
  );
};

export default SearchMap;