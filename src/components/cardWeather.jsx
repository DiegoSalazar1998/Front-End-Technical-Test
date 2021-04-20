import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor:'#80CED7',
        color: 'white'
    },
    root: {
        minWidth: 275,
        marginTop: 10,
        backgroundColor:'#80CED7'
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 24,
    },
    pos: {
        display: "flex",
        marginBottom: 20,
    },
}));

const CardWeather = ({ weather, clearWeather }) => {
    const classes = useStyles();

    const weatherLoading = useSelector((state) => state.weather.weatherLoading);

    //Conversion de grados kelvin
    const kelvin = 273.15;

    return (
        <div>
            {!weatherLoading ? null : (
                <div className={classes.root}>
                    <CardContent className={classes.paper}>
                        <CircularProgress color="secondary" />
                    </CardContent>
                </div>
            )}
            {!weatherLoading ? (
                <Container component="main">
                    <Card className={classes.root} variant="outlined">
                        <CardContent className={classes.paper}>
                            <Typography
                                className={classes.title}
                                gutterBottom
                            >
                                {weather.name}
                            </Typography>
                            <Typography variant="h2" component="h3">
                                {parseFloat(
                                    weather.main.temp - kelvin,
                                    10
                                ).toFixed(2)}
                                <span> &#x2103;</span>
                            </Typography>
                            <Typography
                                className={classes.pos}
                            >
                                {parseFloat(
                                    weather.main.temp_min - kelvin,
                                    10
                                ).toFixed(2)}
                                <span> &#x2103;</span> /
                                {parseFloat(
                                    weather.main.temp_max - kelvin,
                                    10
                                ).toFixed(2)}
                                <span> &#x2103;</span>
                            </Typography>
                            <Typography variant="body2" component="p">
                                Humidity: {weather.main.humidity}
                                <br />
                            </Typography>
                            <Typography variant="body2" component="p">
                                Wind: {weather.wind.speed}mph
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    clearWeather();
                                }}
                            >
                                Clear
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            ) : null}
        </div>
    );
};

export default CardWeather;
