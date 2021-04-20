import sign from "./signs";
import actionType from "./actionTypes";
import calls from "./calls";

//Add Location
//Funcion que obtiene y actualiza los estados del reducer de los estados de llamada
function addLocationAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            locations: [...state.locations],
            locationLoading: false,
            error: false,
            errorMessage: 'Hubo un error',
        };
    } else {
        let newWeather = response;

        return {
            ...state,
            locations: [...state.locations, newWeather],
            weatherLoading: false,
        };
    }
}

//Function loading weather
function addingLocationAction(state, response) {
    return {
        ...state,
        weatherLoading: true
    };
}

const actionsLocation = {
    actionType: actionType,
    sign: sign,
    action: {
        addLocationAction: addLocationAction,
        addingLocationAction: addingLocationAction,
    },
    calls: calls,
};

export default actionsLocation;