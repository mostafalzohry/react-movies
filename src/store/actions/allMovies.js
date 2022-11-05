
import { axiosInstance } from "../../network/axiosInstance";
export const getMoviesList = () => (dispatch) => {
    axiosInstance.get("/popular?api_key=229941a38edbfb81bcf212bdbe456518")
    .then((res) => 
        {
            dispatch({
                type: "GET_MOVIES_LIST",
                payload: res.data.results
            })
        }
    )
    .catch((err) => 
        console.log(err)
    )

}