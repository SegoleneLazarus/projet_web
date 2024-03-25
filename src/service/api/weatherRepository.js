const APIKEY = '276c7be2977ccd817a700b194495fb74';

const APIURL = 'https://api.openweathermap.org/data/2.5/';

export async function fetchWeather(query) {
  const resWeather = await fetch(`${APIURL}weather?q=${query}&lang=fr&units=metric&APPID=${APIKEY}`).then(res =>
    res = res.json()
  );

  console.log("weatherRepository");
  console.log(resWeather);
  return resWeather;
}