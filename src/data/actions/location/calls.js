import sign from "./signs";

function addLocation(location) {
    return (dispatch) => {
        dispatch(sign.addingLocation());
        try {
            const newLocation = location;
            dispatch(sign.addLocationSuccesfully(newLocation));
        } catch (error) {
            console.log(error);
        }
    };
}

function getLocationToEdit(locationToEdit) {
    return (dispatch) => {
        dispatch(sign.edittingLocation());
        try {
            dispatch(sign.getLocationEdit(locationToEdit));
        } catch (error) {
            console.log(error);
        }
    };
}

function editLocation(locationEdited) {
    return (dispatch) => {
        try {
            dispatch(sign.editLocationSuccesfully(locationEdited));
        } catch (error) {
            console.log(error);
        }
    };
}

function removeLocation(idLocation) {
    return (dispatch) => {
        dispatch(sign.removeLocation());
        try {
            dispatch(sign.removeLocationSuccesfully(idLocation));
        } catch (error) {
            console.log(error);
            dispatch(sign.removeLocationError(true));
        }
    };
}

const calls = {
    addLocation: addLocation,
    getLocationToEdit: getLocationToEdit,
    editLocation: editLocation,
    removeLocation: removeLocation,
};

export default calls;
