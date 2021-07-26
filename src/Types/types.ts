

type WeatherResponse={
  id: number,
  main: string,
  description: string,
  icon: string
  }
type Hourly=  {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: WeatherResponse[],
  pop: number
  }

type Daily=  {
  dt: number,
  sunrise: number,
  sunset: number,
  moonrise: number,
  moonset: number,
  moon_phase: number,
  temp: {
  day: number,
  min: number,
  max: number,
  night: number,
  eve: number,
  morn: number
  },
  feels_like: {
  day: number,
  night: number,
  eve: number,
  morn: number
  },
  pressure: number,
  humidity: number,
  dew_point: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather:WeatherResponse [],
  clouds: number,
  pop: number,
  uvi: number
  }
export interface IOneCallResponse{
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather:WeatherResponse []
  },
  hourly:Hourly[]
 daily:Daily[]
  }
  export interface IWeatherData extends IOneCallResponse {
  name:string
  }

  export type IWeatherAPIReponse={
    coord: {
      lon: number,
      lat: number
    },
    name:string
  }