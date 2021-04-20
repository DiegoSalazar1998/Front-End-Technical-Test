import sign from "./signs";
import actionType from "./actionTypes";
import calls from "./calls";
const ERROR_MESSAGE = "Hubo un error de carga";
//Fetch Weather
//Funcion que obtiene y actualiza los estados del reducer de los estados de llamada
function getWeatherAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            weather: {},
            weatherLoading: false,
            error: false,
            errorMessage: ERROR_MESSAGE,
        };
    } else {
        let newWeather = response;

        return {
            ...state,
            weather: newWeather,
            error: false,
            weatherLoading: false,
            errorMessage: '',
        };
    }
}

//Function to clear the weather
function clearWeatherAction(state, response) {
    return {
        ...state,
        weather: {},
        weatherLoading: false,
        error: false,
        errorMessage: "",
    };
}

//Function loading weather
function gettingWeatherAction(state, response) {
    return {
        ...state,
        weatherLoading: response,
    };
}

//Function get weather error
function getWeatherErrorAction(state, response) {
    return {
        ...state,
        error: response,
        weatherLoading: false
    };
}

const actionsWeather = {
    actionType: actionType,
    sign: sign,
    action: {
        getWeather: getWeatherAction,
        clearWeather: clearWeatherAction,
        gettingWeather: gettingWeatherAction,
        getWeatherError: getWeatherErrorAction,
    },
    calls: calls,
};

export default actionsWeather;
