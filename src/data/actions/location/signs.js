import actionType from "./actionTypes";

const addingLocation = () => ({
    type: actionType.ADD_LOCATION,
    payload: true,
});

//Si el producto se guarda en la base de datos
const addLocationSuccesfully = (location) => ({
    type: actionType.ADD_LOCATION_SUCCESFULLY,
    payload: location,
});

//Si hubo un error
const addLocationError = (status) => ({
    type: actionType.ADD_LOCATION_ERROR,
    payload: status,
});

const edittingLocation = () => ({
    type: actionType.EDIT_LOCATION,
    payload: true,
});

//Si el producto se guarda en la base de datos
const editLocationSuccesfully = (locationEdited) => ({
    type: actionType.EDIT_LOCATION_SUCCESFULLY,
    payload: locationEdited,
});

//Si hubo un error
const editLocationError = (status) => ({
    type: actionType.EDIT_LOCATION_ERROR,
    payload: status,
});

//To get location to edit
const getLocationEdit = (locationToEdit) => ({
    type: actionType.GET_LOCATION_EDIT,
    payload: locationToEdit,
});

const removeLocation = () => ({
    type: actionType.REMOVE_LOCATION,
    payload: true,
});

//Si el producto se guarda en la base de datos
const removeLocationSuccesfully = (idLocation) => ({
    type: actionType.REMOVE_LOCATION_SUCCESFULLY,
    payload: idLocation,
});

//Si hubo un error
const removeLocationError = (status) => ({
    type: actionType.REMOVE_LOCATION_ERROR,
    payload: status,
});

const signs = {
    addingLocation: addingLocation,
    addLocationSuccesfully: addLocationSuccesfully,
    addLocationError: addLocationError,
    edittingLocation: edittingLocation,
    editLocationSuccesfully: editLocationSuccesfully,
    editLocationError: editLocationError,
    getLocationEdit: getLocationEdit,
    removeLocation: removeLocation,
    removeLocationSuccesfully: removeLocationSuccesfully,
    removeLocationError: removeLocationError,
};

export default signs;
