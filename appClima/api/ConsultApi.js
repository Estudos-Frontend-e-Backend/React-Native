import { useEffect } from 'react'

export default async function getCurrentWeather(locationCoords) {
    
    const api = '6379b67294608bfe4e65b5c370936da7';
    
    const axios = require('axios');

    const lat = locationCoords.latitude;

    const lon = locationCoords.longitude;

    var result = []


    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`)
    .then(response => {
        const data = response.data
        const locationName = (data.sys.country + ', ' + data.name)
        const temperatureMin = data.main.temp_min
        const temperatureMax = data.main.temp_max
        const wind = data.wind.speed
        const humidity = data.main.humidityconst
        const currentTemperature = data.main.temp

        result = [currentTemperature, temperatureMin,temperatureMax, locationName, wind, humidity]
    })
    .catch((error)=> {
        console.log(error)
    })

    return result;
}