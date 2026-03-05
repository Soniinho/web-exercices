const btn = document.getElementById("get-weather-btn");
const select = document.getElementById("location-selector");
const weatherInfo = document.getElementById("weather-info");
var arrow = document.getElementById("compass-arrow");

btn.addEventListener("click", () => {
  const city = select.value;

  if (!city) return;

  showWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  weatherInfo.style.display = "block";

  document.getElementById("weather-icon").src = data.weather?.[0]?.icon ?? "";

  document.getElementById("main-temperature").textContent = data.main.temp
    ? "".concat(data.main.temp, "°C")
    : "N/A";

  document.getElementById("feels-like").textContent = "Feels Like: ".concat(
    data.main?.feels_like ? "".concat(data.main?.feels_like, "°C") : "N/A",
  ); //data.main?.feels_like ?? "N/A";

  document.getElementById("humidity").textContent = "Humidity: ".concat(
    data.main?.humidity ? "".concat(data.main?.humidity, "%") : "N/A",
  ); //data.main?.humidity ?? "N/A";

  document.getElementById("wind").textContent = "Wind: ".concat(
    data.wind?.speed ? "".concat(data.wind?.speed, " m/s") : "N/A",
  ); //data.wind?.speed ?? "N/A";

  document.getElementById("wind-gust").textContent = "Gusts: ".concat(
    data.wind?.gust ? "".concat(data.wind?.gust, " m/s") : "N/A",
  ); //data.wind?.gust ?? "N/A";

  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main ?? "N/A";

  document.getElementById("location").textContent = data.name ?? "N/A";

  arrow.style.transform = "rotate(".concat(data.wind?.deg, "deg)");
}
