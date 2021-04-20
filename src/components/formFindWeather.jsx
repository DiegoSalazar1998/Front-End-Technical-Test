import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import StarIcon from "@material-ui/icons/Star";
import SaveIcon from "@material-ui/icons/Save";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

//S t y l e s
const styles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const FormFindWeather = (props) => {
    const classes = styles();

    const [location, setLocation] = useState("");

    const weather = useSelector((state) => state.weather.weather);

    const { locationToEdit, isEditing } = useSelector(
        (state) => state.location
    );

    if (
        weather.location !== undefined &&
        weather.location !== null &&
        weather.location !== ""
    ) {
        setLocation(weather.location);
    }

    const findWeatherHandle = () => {
        if (location === "" || location === undefined || location === null) {
            Swal.fire("Aviso", "Enter a location to get a weather", "info");
        } else {
            props.fetchWeather(location);
        }
    };

    const getTimeHour = () => {
        const date = new Date();
        let hours = date.getHours();
        hours = (hours + 24) % 24;
        var mid = "am";
        if (hours === 0) {
            //At 00 hours we need to show 12 am
            hours = 12;
        } else if (hours > 12) {
            hours = hours % 12;
            mid = "pm";
        }
        const time = hours + ":" + date.getMinutes() + " " + mid;
        return time;
    };

    const getDateNow = () => {
        const date = new Date();
        const dateNow =
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        return dateNow;
    };

    const addLocationFavHandle = () => {
        if (location === "" || location === undefined || location === null) {
            Swal.fire("Aviso", "Enter a location to add to favorites", "info");
        } else {
            //Location to add to favorites
            const myLocation = {
                id: location.trim().toUpperCase().replace(/ /g, ""),
                location: location,
                latestWeather: weather,
                date: getDateNow(),
                time: getTimeHour(),
            };
            if (weather.name !== undefined && weather.name !== null) {
                props.addLocation(myLocation);
                // Swal.fire(
                //     "Added",
                //     "Location added to favorite succesfully",
                //     "success"
                // );
                //Clear the card and the input
                props.clearWeather();
                setLocation("");
            } else {
                Swal.fire(
                    "Notice",
                    "Please find the weather to save him with the favorite place",
                    "info"
                );
            }
        }
    };

    const editLocationFavHandle = () => {
        let locationUpdated = locationToEdit;
        locationUpdated.latestWeather = weather;
        locationUpdated.date = getDateNow();
        locationUpdated.time = getTimeHour();

        props.editLocation(locationUpdated);
        props.clearWeather();
        setLocation("");
    };

    return (
        <Container component="main">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <WbSunnyIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Find Weather
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="location"
                                label="Enter a location"
                                name="location"
                                autoFocus
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                }}
                                value={location}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.grid}>
                            <Button
                                fullWidth
                                style={{ height: "60%" }}
                                variant="contained"
                                color="secondary"
                                onClick={
                                    isEditing
                                        ? editLocationFavHandle
                                        : addLocationFavHandle
                                }
                            >
                                {isEditing ? <SaveIcon /> : <StarIcon />}
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={findWeatherHandle}
                        disabled={isEditing ? true : false}
                    >
                        Find
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default FormFindWeather;
