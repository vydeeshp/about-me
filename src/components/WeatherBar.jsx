import Lottie from "lottie-react";

import clear from "../lottie/clear.json";
import clouds from "../lottie/clouds.json";
import rain from "../lottie/rain.json";
import storm from "../lottie/storm.json";
import snow from "../lottie/snow.json";

// --- Sample JSON (London, light rain) ---
const sampleWeather = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }],
  main: { temp: 283.65, feels_like: 283.18 },
  name: "London",
  cod: 200,
};

function getAnimation(type = "") {
  if (type.includes("cloud")) return clouds;
  if (type.includes("rain")) return rain;
  if (type.includes("storm") || type.includes("thunder")) return storm;
  if (type.includes("snow")) return snow;
  return clear;
}

export default function WeatherBarMock() {
  const description = sampleWeather.weather?.[0]?.description?.toLowerCase() || "";

  return (
    <div className="weather-bar">
      <Lottie
        animationData={getAnimation(description)}
        loop
        autoplay
        style={{ width: 80, height: 80 }}
      />
      <div>
        <h3>{sampleWeather.name}</h3>
        <p>{Math.round(sampleWeather.main.temp - 273.15)}°C</p>
        <small>{sampleWeather.weather[0].description}</small>
      </div>
    </div>
  );
}
