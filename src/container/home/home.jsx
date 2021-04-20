import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../data/actions/index";
import FormWeather from "../../components/formFindWeather";
import CardWeather from "../../components/cardWeather";
import FavoriteLocations from "../favoriteLocations/favoriteLocations";
import Grid from "@material-ui/core/Grid";

const Home = (props) => {
    const dispatch = useDispatch();

    const getWeather = (location) =>
        dispatch(actions.weather.calls.getWeather(location));

    const clearWeather = () => dispatch(actions.weather.calls.clearWeather());

    const addLocation = (location) =>
        dispatch(actions.location.calls.addLocation(location));

    const editLocation = (location) =>
        dispatch(actions.location.calls.editLocation(location));

    const { weather } = useSelector((state) => state.weather);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={7}>
                    <FormWeather
                        fetchWeather={getWeather}
                        addLocation={addLocation}
                        clearWeather={clearWeather}
                        editLocation={editLocation}
                    />
                    {weather.name !== undefined && weather.name !== null ? (
                        <CardWeather
                            weather={weather}
                            clearWeather={clearWeather}
                        />
                    ) : (
                        ""
                    )}
                </Grid>
                <Grid item xs={12} sm={5}>
                    <FavoriteLocations />
                </Grid>
            </Grid>
        </div>
    );
};
export default Home;
