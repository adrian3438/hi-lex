import axios from "axios";

const instance = axios.create({
    baseURL : 'https://marineplaza.org/daedong-api/controller',
})

export default instance;
