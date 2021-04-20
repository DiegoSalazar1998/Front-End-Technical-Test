import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../data/actions/index";
import FormWeather from "../../components/formFindWeather";
import CardWeather from "../../components/cardWeather";

const Home = (props) => {
    const dispatch = useDispatch();

    const getWeather = (location) =>
        dispatch(actions.weather.calls.getWeather(location));
    const clearWeather = () => dispatch(actions.weather.calls.clearWeather());
    const addLocation = (location) =>
        dispatch(actions.location.calls.addLocation(location));

    const { weather } = useSelector((state) => state.weather);

    return (
        <div>
            <FormWeather fetchWeather={getWeather} addLocation={addLocation} />
            {weather.name !== undefined && weather.name !== null ? (
                <CardWeather weather={weather} clearWeather={clearWeather} />
            ) : (
                ""
            )}
        </div>
    );
};
export default Home;
