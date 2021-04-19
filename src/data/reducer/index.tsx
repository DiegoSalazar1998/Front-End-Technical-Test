import { combineReducers } from "redux";
import weatherReducer from "../reducer/weather/weatherReducer";

const todoApp = combineReducers({
    weather: weatherReducer,
});

export default todoApp;
