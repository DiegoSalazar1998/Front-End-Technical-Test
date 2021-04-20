import actionType from "./actionTypes";

const addingLocation = () => ({
    type: actionType.ADD_LOCATION,
    payload: true
})

//Si el producto se guarda en la base de datos
const addLocationSuccesfully = location => ({
    type: actionType.ADD_LOCATION_SUCCESFULLY,
    payload: location
})

//Si hubo un error
const addLocationError = status => ({
    type: actionType.ADD_LOCATION_ERROR,
    payload: status
})

const signs = {
    addingLocation: addingLocation,
    addLocationSuccesfully: addLocationSuccesfully,
    addLocationError: addLocationError,
};

export default signs;