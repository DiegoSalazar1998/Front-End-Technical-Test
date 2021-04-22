import { combineReducers } from "redux";
import weatherReducer from "../reducer/weather/weatherReducer";
import locationReducer from "../reducer/location/locationReducer";

const todoApp = combineReducers({
    weather: weatherReducer,
    location: locationReducer
});

export default todoApp;
