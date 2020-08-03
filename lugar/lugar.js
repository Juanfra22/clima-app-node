const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);



    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location${encodeUrl}`,
        headers: { 'X-RapidAPI-key': 'bb54e7d8aemsh7e2d890124b5a40p15f44fjsna9bdef95583a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Result[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}