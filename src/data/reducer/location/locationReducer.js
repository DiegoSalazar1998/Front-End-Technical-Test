import actions from "../../actions/index.ts";

const location = actions.location;

const initialState = {
    locations: [],
    locationLoading: false,
    error: false,
    errorMessage: "",
    isEditing: false,
    locationToEdit: {},
};

function LocationReducer(state = initialState, action) {
    switch (action.type) {
        // --- CASE ADD LOCATION ---
        case location.actionType.ADD_LOCATION_SUCCESFULLY:
            return location.action.addLocationAction(state, action.payload);
        case location.actionType.ADD_LOCATION:
            return location.action.addingLocationAction(state, action.payload);
        // --- CASE UPDATE LOCATION ---
        case location.actionType.GET_LOCATION_EDIT:
            return location.action.getLocationAction(state, action.payload);
        case location.actionType.EDIT_LOCATION_SUCCESFULLY:
            return location.action.editLocationAction(state, action.payload);
        // --- CASE DELETE LOCATION ---
        case location.actionType.REMOVE_LOCATION_SUCCESFULLY:
            return location.action.removeLocationAction(state, action.payload);
        default:
            return { ...state };
    }
}

export default LocationReducer;
