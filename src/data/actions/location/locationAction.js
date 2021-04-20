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
        const locationsArray = state.locations;
        let isExisting = false;
        locationsArray.map((loc)=>{
            if(loc.id === response.id){
                isExisting = true;
            }
            return isExisting;
        })
        
        if(!isExisting){
            let newWeather = response;

            return {
                ...state,
                locations: [...state.locations, newWeather],
                weatherLoading: false,
            };
        }else{
            Swal.fire("Notice", "Location al ready added to favorites", "info");
            return {
                ...state,
                weatherLoading: false,
            };
        }
    }
}

//Function loading weather
function addingLocationAction(state, response) {
    return {
        ...state,
        weatherLoading: true,
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
            weatherLoading: false,
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
            weatherLoading: false,
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
    },
    calls: calls,
};

export default actionsLocation;
