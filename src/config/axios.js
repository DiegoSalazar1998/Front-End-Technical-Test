import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
});

//const appId = '9bc1666bcf0bfac477468efbd31442a0';

export default clienteAxios;