import actionType from "./actionTypes";

function getWeather(payload) {
    const action= {
        type: actionType.FETCH_WEATHER,
        weather: payload,
    };
    return action;
}

function getWeatherSuccesfully(payload) {
    const action= {
        type: actionType.FETCH_WEATHER_SUCCESFULLY,
        payload: {...payload},
    };
    return action;
}

const signs = {
    getWeather: getWeather,
    getWeatherSuccesfully: getWeatherSuccesfully,
};

export default signs;
