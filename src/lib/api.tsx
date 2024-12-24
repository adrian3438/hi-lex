import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/hilex-api/controller',
})

export default instance;
