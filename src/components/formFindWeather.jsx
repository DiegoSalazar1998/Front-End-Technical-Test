import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//S t y l e s
const styles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
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
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.fetchWeather(location);
                        }}
                    >
                        Find
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default FormFindWeather;
