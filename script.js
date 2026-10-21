
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const statusMessage = document.getElementById("status");
const weatherCard = document.getElementById("weather");

// WeatherAPI.com API key
const API_KEY = "f248088af143440185f161829262110";

// Display status messages
function showStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("error", isError);
}

// Format numbers safely
function formatNumber(value, digits = 0) {
  return Number.isFinite(value)
    ? value.toFixed(digits)
    : "--";
}

// Fetch current weather from WeatherAPI.com
async function getWeather(cityName) {
  const url = new URL(
    "https://api.weatherapi.com/v1/current.json"
  );

  url.search = new URLSearchParams({
    key: API_KEY,
    q: cityName.trim(),
    aqi: "no"
  });

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error?.message || "Unable to fetch weather."
    );
  }

  return data;
}

// Display weather information
function displayWeather(data) {
  const location = data.location;
  const current = data.current;

  const locationParts = [
    location.name,
    location.region,
    location.country
  ].filter(Boolean);

  document.getElementById("location").textContent =
    [...new Set(locationParts)].join(", ");

  document.getElementById("local-time").textContent =
    "Local time: " + location.localtime;

  // Current temperature in Celsius
  document.getElementById("temperature").textContent =
    formatNumber(current.temp_c);

  // Weather conditions
  document.getElementById("condition").textContent =
    current.condition.text;

  // Feels-like temperature
  document.getElementById("feels-like").textContent =
    `Feels like ${formatNumber(current.feelslike_c)}°C`;

  document.getElementById("detail-feels").textContent =
    `${formatNumber(current.feelslike_c)}°C`;

  // Humidity
  document.getElementById("humidity").textContent =
    `${formatNumber(current.humidity)}%`;

  // Wind speed
  document.getElementById("wind").textContent =
    `${formatNumber(current.wind_kph)} km/h`;

  // Visibility
  document.getElementById("visibility").textContent =
    `${formatNumber(current.vis_km, 1)} km`;

  // Actual weather icon provided by the API
  const weatherIcon = document.getElementById("weather-icon");

  if (current.condition.icon) {
    weatherIcon.innerHTML = "";

    const image = document.createElement("img");
    image.src = "https:" + current.condition.icon;
    image.alt = current.condition.text;
    image.width = 120;
    image.height = 120;
    image.style.objectFit = "contain";

    weatherIcon.appendChild(image);
  } else {
    weatherIcon.textContent = current.is_day ? "🌤️" : "🌙";
  }

  weatherIcon.style.opacity = "1";

  // Last updated time from the weather provider
  document.getElementById("updated").textContent =
    `Last updated: ${current.last_updated} · Source: WeatherAPI.com`;

  weatherCard.hidden = false;

  showStatus("Current weather loaded successfully.");
}

// Search for weather by city
async function searchWeather(cityName) {
  if (!cityName.trim()) {
    showStatus("Please enter a city name.", true);
    return;
  }

  searchButton.disabled = true;
  searchButton.textContent = "Loading...";

  showStatus("Fetching current weather...");

  try {
    const data = await getWeather(cityName);
    displayWeather(data);
  } catch (error) {
    showStatus(
      error.message || "Something went wrong. Please try again.",
      true
    );
  } finally {
    searchButton.disabled = false;
    searchButton.innerHTML = 'Search <span>→</span>';
  }
}

// Handle the search form
form.addEventListener("submit", event => {
  event.preventDefault();
  searchWeather(cityInput.value);
});

// Load Dehradun weather when the app opens
searchWeather("Dehradun");
