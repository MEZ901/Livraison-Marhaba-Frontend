import  { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet"

const LeafletGeocoder = () => {
    const map = useMap();
    useEffect(()=>{
         L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
            const lat_lng = e.geocode.center;
            L.marker(lat_lng).addTo(map).bindPopup(e.geocode.name).openPopup();
            map.fitBounds(e.geocode.bbox)
            })
            .addTo(map);
            
    },[])
  return null ;
}

export default LeafletGeocoder