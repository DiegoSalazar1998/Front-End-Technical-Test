import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavLocationsTable from "../../components/favLocationsTable";

const FavoriteLocations = (props) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>FAVORITES LOCATIONS</h1>
            <FavLocationsTable/>
        </div>
    );
};

export default FavoriteLocations;
