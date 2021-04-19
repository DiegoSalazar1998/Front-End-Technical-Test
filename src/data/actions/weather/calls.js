import clienteAxios from "../../../config/axios";
import sign from './signs'

function getWeather(body) {
    return async (dispatch) => {     
        //dispatch(descargarProductos());
        const appId = "9bc1666bcf0bfac477468efbd31442a0";
        try {
            const response = await clienteAxios.get(
                `?q=${body}&appid=${appId}`
            );
            dispatch(sign.getWeatherSuccesfully(response.data));
        } catch (error) {
            console.log(error);
            //dispatch(descargaProductosError())
        }
    };
}

const calls = {
    getWeather: getWeather
}

export default calls;