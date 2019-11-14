import { actionType } from '../actions';

export const  WeatherReducer = (state = [], action) => {
    console.log("the action if the reducer_weather is " , action);
    switch (action.type) {
        case actionType.FEATCH_WEATHER: {
            console.log("i am inside FEATCH_WEATHER");
            return [action.payload.data, ...state]; // [city, city, city]
        }
        default:
            return state
    }
}
