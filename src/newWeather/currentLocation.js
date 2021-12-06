import apiKeys from "./apiKeys";


if (navigator.geolocation) {
    this.getPosition()
    .then((position) => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    })
    .catch((err) => {
      this.getWeather(28.67, 77.22);
      alert(
        "You have disabled location service."
      );
    });
} else {
  alert("Geolocation not available");
}
getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
    });
  };
    