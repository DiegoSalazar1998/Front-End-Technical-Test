import React from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherAction from "../../data/actions/index";
import FormWeather from "../../components/formFindWeather";
import CardWeather from "../../components/cardWeather";
//import Swal from "sweetalert2";

const Home = (props) => {
    const dispatch = useDispatch();

    const getWeather = (location) =>
        dispatch(weatherAction.weather.calls.getWeather(location));

    const weather = useSelector((state) => state.weather.weather);
    console.log("weather", weather);

    // if(weather.name === undefined || weather.name === null ){
    //     {Swal.fire(
    //         "Correcto",
    //         "Enter a location to get a weather",
    //         "success"
    //     )}
    // }
    return (
        <div>
            <FormWeather fetchWeather={getWeather} />
            {weather.name !== undefined && weather.name !== null ? (
                <CardWeather weather={weather} />
            ) : (
                ""
            )}
        </div>
    );
};
export default Home;
