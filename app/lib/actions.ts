"use server";

export async function getWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  const data = await response.json();

  console.log("Ответ API геокодинга:", JSON.stringify(data));
  console.log("API_KEY:", process.env.API_KEY);
  if (data.length === 0 || !data[0]?.local_names || !data[0]?.local_names?.ru) {
    throw new Error("Некорректное название города");
  }

  const { lat, lon } = data[0];
  const { ru } = data[0].local_names;

  const response2 = await fetch(
    `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=ru&appid=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  const currentWeather = await response2.json();
  const localTime = new Date(currentWeather.current.dt * 1000);
  const hours = localTime.getHours().toString().padStart(2, "0");
  const minutes = localTime.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  const temp = Math.round(currentWeather.current.temp);
  const feelsLike = Math.round(currentWeather.current.feels_like);
  const windSpeed = Math.round(currentWeather.current.wind_speed);

  const weatherObject = {
    ...currentWeather,
    name: ru,
    time: formattedTime,
    temp,
    feelsLike,
    windSpeed,
  };

  return weatherObject;
}
