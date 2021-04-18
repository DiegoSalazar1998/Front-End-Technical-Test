import {
    FETCH_WEATHER
} from "./actionTypes";

import clienteAxios from '../config/axios.js'
import Swal from 'sweetalert2';


//Fetch Weather
export function fetchWeatherAction(country, city){
    return async (dispatch) => {
        dispatch(agregarProducto());

        try{
            //insertar en la API
            await clienteAxios.post('/productos',producto);

            //Si todo bien
            dispatch( agregarProductoExito(producto) );

            //Alerta Exito
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        }catch(error){
            console.log(error);
            //Si hay un error cambiar el state
            dispatch( agregarProductoError(true) )

            //Alerta Error
            Swal.fire({
                icon:'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}