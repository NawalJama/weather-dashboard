const apiKey = "ad992c8e60294bff45aa9cead11cdc53"
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

searchForm.addEventListener('submit', handleSubmit);

