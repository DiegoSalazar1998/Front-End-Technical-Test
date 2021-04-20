import sign from "./signs";

function addLocation(location) {
    return (dispatch) => {
        //dispatch(descargarProductos());
        dispatch(sign.addingLocation());
        try {
            const newLocation = location
            dispatch(sign.addLocationSuccesfully(newLocation));
        } catch (error) {
            console.log(error);
        }
    };
}

const calls = {
    addLocation: addLocation,
};

export default calls;