import axios from "axios";

const axiosConfig = axios.create({
    // .. where we make our configurations
    //withCredentials: true, //Without it cookies will not be sent! Also, needs to be first in axios.create(..)!!
    //As mentioned in:
    //https://stackoverflow.com/questions/43002444/make-axios-send-cookies-in-its-requests-automatically
    baseURL: "https://gh-actions-heroku-backend.herokuapp.com/api",
});

export default axiosConfig;
