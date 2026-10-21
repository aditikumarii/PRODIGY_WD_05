
# 🌦️ Weather App

A responsive Weather App built using HTML, CSS, and JavaScript that displays current weather information for any searched city using the WeatherAPI.com API.

## 📌 Project Overview

This project was developed as part of my **Web Development Internship at Prodigy Infotech (Task 05)**.

The application allows users to search for a city and view its current weather conditions, temperature, humidity, wind speed, visibility, and other weather details.

## ✨ Features

- 🔍 Search for weather by city name
- 🌡️ Current temperature in Celsius
- 🌤️ Live weather conditions and weather icons
- 🌡️ Feels-like temperature
- 💧 Humidity information
- 💨 Wind speed in km/h
- 👁️ Visibility in kilometres
- 🕒 Local time and last weather update
- ⚠️ Error handling for invalid cities and API errors
- 📱 Responsive user interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- WeatherAPI.com API

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Configure your WeatherAPI.com API key in `script.js`.
4. Open `index.html` using Live Server.
5. Enter a city name and click **Search** to view its weather.

## 🔑 API Configuration

This project uses the WeatherAPI.com current weather endpoint.

1. Create an account at [WeatherAPI.com](https://www.weatherapi.com/).
2. Obtain an API key.
3. Add your key to `script.js`:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

Replace `YOUR_API_KEY_HERE` with your own API key.

**Security:** Avoid uploading API keys to public repositories. For a publicly deployed project, use a backend to protect the key where appropriate.

## 🌍 Weather Data

Weather information is retrieved from WeatherAPI.com. Results may differ slightly from Google Weather or other weather services because they may use different data sources and update schedules.

## 🎯 Learning Outcomes

- Working with external APIs using JavaScript `fetch()`
- Handling asynchronous operations with `async/await`
- Processing JSON responses
- Updating webpage content dynamically using the DOM
- Handling errors and invalid user input
- Building an interactive weather application

## 👩‍💻 Developer

**Aditi Kumari**

B.Tech Computer Science Engineering  
Specialization: Data Science and Artificial Intelligence  
Graphic Era Hill University

## 📜 Internship

**Organization:** Prodigy Infotech  
**Task:** Task 05 – Weather App  
**Domain:** Web Development

## ⭐ Acknowledgements

Thanks to Prodigy Infotech for providing the opportunity to practice web development and build a real-world project.

---

If you find this project useful, feel free to star the repository!
