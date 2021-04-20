import actions from "../../actions";

const location = actions.location;

const initialState = {
    locations: [],
    locationLoading: false,
    error: false,
    errorMessage: "",
};

function LocationReducer(state = initialState, action) {
    switch (action.type) {
        // --- CASE ADD LOCATION ---
        case location.actionType.ADD_LOCATION_SUCCESFULLY:
            return location.action.addLocationAction(state, action.payload);
        case location.actionType.ADD_LOCATION:
            return location.action.addingLocationAction(state, action.payload);   
        default:
            return { ...state };
    }
}

export default LocationReducer;