
import { IWeatherData } from './../../Types/types';
import { WeatherActionTypes } from './../actionTypes';

export interface IWeatherIntialState {
    OneCallCityData:IWeatherData[],
    error:string|undefined,
  selectedCity: IWeatherData|undefined,
  loading:boolean

}
const initialState: IWeatherIntialState = {
    OneCallCityData: [],
    error:undefined,
    selectedCity:undefined,
    loading:false
    
    
}

export const weatherReducer = (state: IWeatherIntialState = initialState, action: { type: WeatherActionTypes, payload: any }):IWeatherIntialState => {


    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER_START:
            return {...state, loading:true}
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return{
                ...state,
                loading: false,
                error:undefined,
                OneCallCityData:[...state.OneCallCityData, action.payload]
            }
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case WeatherActionTypes.SELECT_CITY:{
            let selected = state.OneCallCityData.find(city => city.name === action.payload)
            return{
                ...state,
                loading:false,
                error:undefined,
                selectedCity:selected
            }
        }

        case WeatherActionTypes.DELETE_CITY:{
            
            return{
                ...state,
                loading:false,
                error:undefined,
                OneCallCityData: [
                    ...state.OneCallCityData.filter((city) => city.name !== action.payload),
                  ],
               
            }
        }
        default: return state;

    }
}