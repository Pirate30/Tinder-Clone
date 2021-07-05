import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinderbackendappp.herokuapp.com/"
})

export default instance;