import { useEffect } from 'react'

export default async function getCurrentWeather(locationCoords) {

    const apiKey = '6379b67294608bfe4e65b5c370936da7';

    const lat = locationCoords.latitude

    const log = locationCoords.longitude

    var result = []

    useEffect

    //console.log(`http://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=6379b67294608bfe4e65b5c370936da7`)
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=apiKey`)

    .then(response => {
        const data = response.data
        // const locationName

        console.log(data)
    })
    .catch((error)=> {
        console.log(error)
    })

    return result;
}