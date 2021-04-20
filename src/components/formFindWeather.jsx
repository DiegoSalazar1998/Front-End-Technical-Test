import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import StarIcon from "@material-ui/icons/Star";
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

    const locations = useSelector((state) => state.location.locations);
    console.log("FAVORITE LOCATIONS", locations);

    const weather = useSelector((state) => state.weather.weather);
    const findWeatherHandle = () => {
        if (location === "" || location === undefined || location === null) {
            Swal.fire("Aviso", "Enter a location to get a weather", "info");
        } else {
            props.fetchWeather(location);
        }
    };

    const addLocationFavHandle = () => {
        if (location === "" || location === undefined || location === null) {
            Swal.fire("Aviso", "Enter a location to add to favorites", "info");
        } else {
            props.fetchWeather(location);
            console.log("WEATHER from add", weather);

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

            const myLocation = {
                id: location.trim().toUpperCase().replace(/ /g, ""),
                location: location,
                latestWeather: weather,
                date:
                    date.getDate() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getFullYear(),
                time: hours + ":" + date.getMinutes() + " " + mid,
            };
            if (weather.name !== undefined && weather.name !== null) {
                props.addLocation(myLocation);
                Swal.fire(
                    "Added",
                    "Location added to favorite succesfully",
                    "success"
                );
            } else {
                Swal.fire(
                    "Notice",
                    "Please find the weather to save him with the favorite place",
                    "info"
                );
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.grid}>
                            <Button
                                fullWidth
                                style={{ height: "60%" }}
                                variant="contained"
                                color="secondary"
                                onClick={addLocationFavHandle}
                            >
                                <StarIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={findWeatherHandle}
                    >
                        Find
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default FormFindWeather;
