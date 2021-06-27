import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, {Marker} from 'react-map-gl'

export default function Map() {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
            console.log(
                position.coords.longitude,
                position.coords.latitude,
            );
            },
            error => alert(error.message)
        );
        
    }, []);
    console.log(latitude)

    const [places, setPlaces] = useState([])


    const [viewport, setViewport] = useState({
        latitude: 22.3528755,
        longitude: 73.1467504,
        width: "100vw",
        height: "100vh",
        zoom: 10
      });
      useEffect(()=>{
          axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/hospital.json?proximity=73.1467504,22.3528755&limit=10&access_token=pk.eyJ1IjoiYWRpdHBhdGVsMDEiLCJhIjoiY2tweTBhMDRvMDJ0MTJzcnJjNjFqOXFtOSJ9.qOpvmo2q5FwwDxPht1eC8A`)
          .then(res=>{
              setPlaces(res.data.features)
              console.log(res.data.features)
          })
          .catch(err=>console.log(err))
      },[])

    return (
        <div>
            <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/aditpatel01/ckqam2mdn0yjz17qoiwm9ctii"
        onViewportChange={viewport => {
            setViewport(viewport);
          }}
      >
          {places.map(place => (
              <Marker
            key={place.properties.foursquare}
            latitude={place.geometry.coordinates[1]}
            longitude={place.geometry.coordinates[0]}
          >
              <button>
              <img className="himage" src="/pills-bottle.png" alt="Hospital Icon" />
            </button>
           </Marker>
        ))}

      </ReactMapGL>
        </div>
    )
}
// https://api.mapbox.com/geocoding/v5/mapbox.places/covid%20vaccine,-73.989,40.733.json?access_token=pk.eyJ1IjoiYWRpdHBhdGVsMDEiLCJhIjoiY2tweTBhMDRvMDJ0MTJzcnJjNjFqOXFtOSJ9.qOpvmo2q5FwwDxPht1eC8A
// latitude: 22.3528755
// longitude: 73.1467504