import axios from "axios";
import { changeLoader } from "../store/actions/loader";
import store from "../store/store";


export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})




