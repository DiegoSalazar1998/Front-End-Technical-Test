import sign from "./signs";
import actionType from "./actionTypes";
import calls from "./calls";
const ERROR_MESSAGE = "Hubo un error de carga";
//Fetch Weather
//Funcion que obtiene y actualiza los estados del reducer de los estados de llamada
function getWeatherAction(state, response) {
    if (
        response === null ||
        response === undefined
    ) {
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
            weatherLoading: false,
        };
    }
}
// //Funcion que se lanza cuando la consulta inicia
// function getWeatherWorkingAction(state, response) {
//     return {
//         ...state,
//         weatherLoading: true,
//     };
// }
// //Funcion que se lanza si hay un error en la consulta
// function getWeatherFailureAction(state, response) {
//     return {
//         ...state,
//         errorMessage: ERROR_MESSAGE,
//         error: true,
//     };
// }

const actionsWeather = {
    actionType: actionType,
    sign: sign,
    action: {
        getWeather: getWeatherAction,
    },
    calls: calls,
};

export default actionsWeather;
