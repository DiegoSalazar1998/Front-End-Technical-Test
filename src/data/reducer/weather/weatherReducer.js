import actions from "../../actions/index.ts";

const weather = actions.weather;

const initialState = {
    weather: {},
    weatherLoading: false,
    error: false,
    errorMessage: "",
};

function WeatherReducer(state = initialState, action) {
    switch (action.type) {
        // --- CASE GET WEATHER ---
        case weather.actionType.FETCH_WEATHER_SUCCESFULLY:
            return weather.action.getWeather(state, action.payload);
        case weather.actionType.CLEAR_WEATHER:
            return weather.action.clearWeather(state, action.payload);
        case weather.actionType.FETCHING_WEATHER:
            return weather.action.gettingWeather(state, action.payload); 
            case weather.actionType.FETCH_WEATHER_ERROR:
            return weather.action.getWeatherError(state, action.payload);   
        default:
            return { ...state };
    }
}

export default WeatherReducer;
