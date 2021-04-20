import React from "react";
import FavLocationsTable from "../../components/favLocationsTable";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

//S t y l e s
const styles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(9),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}));

const FavoriteLocations = (props) => {
    const classes = styles();

    return (
        <div>
            <Container component="main">
                <CssBaseline />
                <div className={classes.paper}>
                    <h1>Favorite Locations</h1>
                    <FavLocationsTable />
                </div>
            </Container>
        </div>
    );
};

export default FavoriteLocations;
