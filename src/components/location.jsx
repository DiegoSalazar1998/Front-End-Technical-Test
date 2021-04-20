import React from "react";
import "../styles.css";
import actions from "../data/actions/index";
import { useDispatch } from "react-redux";

const Location = ({ location }) => {
    const dispatch = useDispatch();

    const getWeather = (location) =>
        dispatch(actions.weather.calls.getWeather(location));

    const getLocationToEdit = () =>
        dispatch(actions.location.calls.getLocationToEdit(location));

    const removeLocation = (idLocation) =>
        dispatch(actions.location.calls.removeLocation(idLocation));

    const kelvin = 273.15;
    return (
        <div className="Location">
            <div>
                <h1>{location.location}</h1>
                <p>
                    Latest weather registered:
                    {parseFloat(
                        location.latestWeather.main.temp - kelvin,
                        10
                    ).toFixed(2)}
                    <span> &#x2103;</span>
                </p>
                <p>{location.date + " " + location.time}</p>
            </div>
            <div className="buttonsContainer">
                <button onClick={() => {
                    removeLocation(location.id)
                }}>Delete</button>
                <button
                    onClick={() => {
                        getWeather(location.location);
                        getLocationToEdit(location);
                    }}
                >
                    Get Weather
                </button>
            </div>
        </div>
    );
};

export default Location;
