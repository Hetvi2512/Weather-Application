import { AppActionTypes } from "../actionTypes";

export interface IAppState{
  isDarkMode:boolean;
    hourly:boolean
}
const initialAppState: IAppState={
  isDarkMode: false,
    hourly:false
}

export const appReducer = (state: IAppState = initialAppState, action: { type: AppActionTypes; payload: any }) => {
switch(action.type)
{
    case AppActionTypes.TOGGLE_DARK_MODE:
       
        return {
          ...state,
          isDarkMode: !state.isDarkMode,
        };

        case AppActionTypes.TOGGLE_HOURLY_WEEKLY:
       
        return {
          ...state,
          hourly: !state.hourly,
        };

        default: return{...state}

}
}