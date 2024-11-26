import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/valmax-api/controller',
})

export default instance;
