import axios from "axios";

const api = axios.create({
    baseURL: "https://plathanus-challenge.herokuapp.com/",
});

export default api;