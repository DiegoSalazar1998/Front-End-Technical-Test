import clienteAxios from "../../../config/axios";
import sign from "./signs";
import Swal from "sweetalert2";

function getWeather(location) {
    return async (dispatch) => {
        //dispatch(descargarProductos());
        const appId = "9bc1666bcf0bfac477468efbd31442a0";
        dispatch(sign.gettingWeather());
        try {
            const response = await clienteAxios.get(
                `?q=${location}&appid=${appId}`
            );
            dispatch(sign.getWeatherSuccesfully(response.data));
        } catch (error) {
            console.log(error);
            dispatch(sign.getWeatherError());
            Swal.fire("Error", "Please try again with a valid location", "error");
        }
    };
}

function clearWeather() {
    return (dispatch) => {
        try {
            dispatch(sign.clearWeather({}));
        } catch (error) {
            console.log(error);
            //dispatch(descargaProductosError())
        }
    };
}

const calls = {
    getWeather: getWeather,
    clearWeather: clearWeather
};

export default calls;
