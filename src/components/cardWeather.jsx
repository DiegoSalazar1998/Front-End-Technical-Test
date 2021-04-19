import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    root: {
        minWidth: 275,
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
        marginBottom: 20,
    },
}));

const CardWeather = ({ weather }) => {
    const classes = useStyles();
    console.log("WEATHER", weather);

    //Conversion de grados kelvin
    const kelvin = 273.15;

    return (
        <Container component="main" maxWidth="xs">
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.paper}>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {weather.name}
                    </Typography>
                    <Typography variant="h1" component="h2">
                        {parseFloat(weather.main.temp - kelvin, 10).toFixed(2)}
                        <span> &#x2103;</span>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {parseFloat(weather.main.temp_min - kelvin, 10).toFixed(
                            2
                        )}
                        <span> &#x2103;</span> / 
                        {parseFloat(weather.main.temp_max - kelvin, 10).toFixed(
                            2
                        )}
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
                    <Button fullWidth variant="contained" color="primary">
                        Clear
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default CardWeather;
