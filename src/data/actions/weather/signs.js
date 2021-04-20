import actionType from "./actionTypes";

function gettingWeather() {
    console.log("LOADING");
    const action = {
        type: actionType.FETCHING_WEATHER,
        payload: true,
    };
    return action;
}

function getWeatherSuccesfully(payload) {
    const action = {
        type: actionType.FETCH_WEATHER_SUCCESFULLY,
        payload: { ...payload },
    };
    return action;
}

function getWeatherError() {
    const action = {
        type: actionType.FETCH_WEATHER_ERROR,
        payload: true,
    };
    return action;
}

function clearWeather() {
    const action = {
        type: actionType.CLEAR_WEATHER,
        payload: {},
    };
    return action;
}

const signs = {
    gettingWeather: gettingWeather,
    getWeatherSuccesfully: getWeatherSuccesfully,
    clearWeather: clearWeather,
    getWeatherError: getWeatherError,
};

export default signs;
