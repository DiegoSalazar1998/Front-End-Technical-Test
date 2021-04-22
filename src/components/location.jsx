import React from "react";
import "../styles.css";
import actions from "../data/actions/index.ts";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Grid from "@material-ui/core/Grid";

//Icons imports
import AcUnitIcon from "@material-ui/icons/AcUnit";
import CloudIcon from "@material-ui/icons/Cloud";

//S t y l e s
const styles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Location = ({ location }) => {
    const classes = styles();

    const dispatch = useDispatch();

    const getWeather = (location) =>
        dispatch(actions.weather.calls.getWeather(location));

    const getLocationToEdit = () =>
        dispatch(actions.location.calls.getLocationToEdit(location));

    const removeLocation = (idLocation) =>
        dispatch(actions.location.calls.removeLocation(idLocation));

    const kelvin = 273.15;

    const weatherIcon = () => {
        const temp = parseFloat(
            location.latestWeather.main.temp - kelvin,
            10
        ).toFixed(2);
        if (temp >= 25) {
            return <WbSunnyIcon />;
        } else if (temp <= 25 && temp > 0) {
            return <CloudIcon />;
        } else if (temp <= 0) {
            return <AcUnitIcon />;
        }
    };

    return (
        <div className="Location">
            <div className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4}>
                        <Avatar className={classes.avatar}>
                            {weatherIcon()}
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={8}>
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
                    </Grid>
                </Grid>
            </div>
            <div className="buttonsContainer">
                <button
                    onClick={() => {
                        removeLocation(location.id);
                    }}
                >
                    Delete
                </button>
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
