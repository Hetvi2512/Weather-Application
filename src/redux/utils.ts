export const addToFav = (weather: any, fav: boolean) => {
    let favWeather ={...weather}
    
    favWeather.push(weather)
    return favWeather;
}
