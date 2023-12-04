import  { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const LeafletRoutingMachine = () => {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      map.on("click", function (e) {
        console.log(e.latlng)
        L.Routing.control({
          waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(e.latlng.lat, e.latlng.lng)
          ],
          lineOptions: {
            styles: [
              {
                color: "blue",
                with: 4,
                opacity: 0.6
              }
            ]
          },
          routeWhileDragging: false,
          geocoder: L.Control.Geocoder.nominatim(),
          addWaypoints: false,
          draggableWaypoints: false,
          fitSelectedRoutes: true,
          showAlternatives: false

        }).addTo(map);
      });
    });
  }, [map]);

  return null;
};

export default LeafletRoutingMachine;