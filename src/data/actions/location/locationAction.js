import sign from "./signs";
import actionType from "./actionTypes";
import calls from "./calls";
import Swal from "sweetalert2";

//Add Location
//Funcion que obtiene y actualiza los estados del reducer de los estados de llamada
function addLocationAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            locations: [...state.locations],
            locationLoading: false,
            error: false,
            errorMessage: "Hubo un error",
        };
    } else {
        if (state.locations.length < 3) {
            const locationsArray = state.locations;
            let isExisting = false;
            locationsArray.map((loc) => {
                if (loc.id === response.id) {
                    isExisting = true;
                }
                return isExisting;
            });

            if (!isExisting) {
                let newWeather = response;

                Swal.fire(
                    "Added",
                    "Location added to favorite succesfully",
                    "success"
                );
                return {
                    ...state,
                    locations: [...state.locations, newWeather],
                    locationLoading: false,
                };
            } else {
                Swal.fire(
                    "Notice",
                    "Location already added to favorites",
                    "info"
                );
                return {
                    ...state,
                    locationLoading: false,
                };
            }
        } else if ((state.locations.length >= 3)) {
            Swal.fire("Notice", "You can't add more favorites locations!", "info");
            return {
                ...state,
                locationLoading: false,
            };
        }
    }
}

//Function loading weather
function addingLocationAction(state, response) {
    return {
        ...state,
        locationLoading: true,
    };
}

function getLocationAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            locationToEdit: { ...state.locationToEdit },
            locationLoading: false,
            error: false,
            errorMessage: "Hubo un error",
            isEditing: false,
        };
    } else {
        return {
            ...state,
            locationToEdit: response,
            isEditing: true,
        };
    }
}

function editLocationAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            locationToEdit: {},
            locationLoading: false,
            error: false,
            errorMessage: "Hubo un error",
            isEditing: false,
        };
    } else {
        //Logica de quitar location por nueva
        let locationArray = state.locations;
        const index = locationArray.findIndex((el) => el.id === response.id);
        locationArray.splice(index, 1, response);

        return {
            ...state,
            locationToEdit: {},
            locations: locationArray,
            isEditing: false,
        };
    }
}

function removeLocationAction(state, response) {
    if (response === null || response === undefined) {
        return {
            ...state,
            locationToEdit: {},
            locationLoading: false,
            error: true,
            errorMessage: "Hubo un error",
            isEditing: false,
        };
    } else {
        //Logic to remove location
        let locationArray = state.locations;
        const index = locationArray.findIndex((el) => el.id === response);
        locationArray.splice(index, 1);

        return {
            ...state,
            locationToEdit: {},
            locations: locationArray,
            isEditing: false,
        };
    }
}

const actionsLocation = {
    actionType: actionType,
    sign: sign,
    action: {
        addLocationAction: addLocationAction,
        addingLocationAction: addingLocationAction,
        getLocationAction: getLocationAction,
        editLocationAction: editLocationAction,
        removeLocationAction: removeLocationAction,
    },
    calls: calls,
};

export default actionsLocation;
