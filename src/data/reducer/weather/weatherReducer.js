import actions from "../../actions";

const weather = actions.weather;

const initialState = {
    weather: {},
    weatherLoading: false,
    error: false,
    errorMessage: ''
};

function WeatherReducer(state = initialState, action) {
    switch (action.type) {
        // --- CASE GET WEATHER ---
        case weather.actionType.FETCH_WEATHER_SUCCESFULLY:
            return weather.action.getWeather(state,action.payload);
        default:
            return { ...state };
    }
}

export default WeatherReducer;
