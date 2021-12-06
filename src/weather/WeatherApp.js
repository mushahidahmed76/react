import React, { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox"
import SearchBox from "./components/SearchBox"
import SearchRes from "./components/SearchRes"

const WeatherApp = () => {

  const newLoactions = {
  todos: [
    {
        id:'1',
        lat :'24.8607',
        long :'67.0011'
       },
       {
         id:'3',
         lat :'33.6844',
         long :'73.0479'
       }
  ]
};
 const [locations, setLocations] = useState(newLoactions);
 const [city, setCity] = useState([]);
 const searchProps = title =>{
  setCity([...city,title])
}
 return (
  <div className="App"> 
  { locations.todos.map(todo => (
    <WeatherBox 
      key={todo.id}
      lat={todo.lat}
      long={todo.long}
    />
  ))}
     <SearchBox 
     searchProps={searchProps}
     /> 
    { city.map(title => (
    <SearchRes 
      city={title}
    />
  ))} 
  </div>
  );

}
export default WeatherApp