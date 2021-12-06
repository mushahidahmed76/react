import React, { useEffect, useState } from "react";
import Weather from "./Weather"
import { Dimmer, Loader } from 'semantic-ui-react';

const WeatherBox = props => {
    const [lat, setLat] = useState(props.lat);
    const [long,setLong] = useState(props.long);
    const [data, setData] = useState([]);

    let REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5';
    let REACT_APP_API_KEY = 'ccbec401716f08fcbf12660307e37a83';

 useEffect(() => {
   const fetchData = async () => {
    //  navigator.geolocation.getCurrentPosition(function(position) {
    //    setLat(position.coords.latitude);
    //    setLong(position.coords.longitude);
    //  });
     if(lat != '' && long != ''){
        await fetch(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
         
        });
     }
   

   }
   fetchData();
 }, [lat,long]);
 useEffect(() => {
    return () => {
      console.log('cleaning...');
    }
  },[]);

  return (
    <>
      {(typeof data.main !== 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
 </>
  );
}
export default WeatherBox