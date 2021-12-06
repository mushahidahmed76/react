import React, { useState,useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import axios from "axios";
import moment from 'moment';

const SearchRes = props => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});
    let REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
    let REACT_APP_API_KEY = 'ccbec401716f08fcbf12660307e37a83';
    const search = (city) => {
        axios
          .get(
            `${REACT_APP_API_URL}weather?q=${
              city != "[object Object]" ? city : query
            }&units=metric&APPID=${REACT_APP_API_KEY}`
          )
          .then((response) => {
            setWeather(response.data);
            setQuery("");
          })
          .catch(function (error) {
            console.log(error);
            setWeather("");
            setQuery("");
            setError({ message: "Not Found", query: query });
          });
      };
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        } // add zero in front of numbers < 10
        return i;
      }
    
      const defaults = {
        color: "white",
        size: 112,
        animate: true,
      };
    
      useEffect(() => {
        search(props.city);
      }, []);

  
  return (
    <ul className="">
    {typeof weather.main != "undefined" ? (

       <div>
           <div className="main">

                <div className="top">
                <p className="header"> {weather.name}, {weather.sys.country}</p>
                <img
                    className="headerImg"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
                </div>
                <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                {/* <p className="description">{weatherData.weather[0].main}</p> */}
                </div>

                <div className="flex">
                <p className="temp">Temprature: {Math.round(weather.main.temp)}°c ({weather.weather[0].main})</p>
                <p className="temp">Humidity: {Math.round(weather.main.humidity)}%</p>
                </div>

                <div className="flex">
                <p className="sunrise-sunset">Visibility: {Math.round(weather.visibility)} mi</p>
                <p className="sunrise-sunset"> Wind Speed:  {Math.round(weather.wind.speed)} Km/h</p>
                </div>

            </div>

       
      </div>
    ) : (
            <div></div>
    )}
  </ul>
  )
}
export default SearchRes