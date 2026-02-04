import ReactWeather, { useOpenWeather } from 'react-open-weather';

export default function WeatherBar() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '12475b12c6559b5eda54a24bebaeb96b', 
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}
