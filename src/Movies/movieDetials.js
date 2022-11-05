import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './details.css'
import { useDispatch } from "react-redux"
import {changeLoader} from "../store/actions/loader"
import { addFavorite } from './../store/actions/favorite';

function MoviesDetialsComponant(){
    const params = useParams()
    const [movie, setMovie] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=229941a38edbfb81bcf212bdbe456518`)
        .then((res) => {
            setMovie(res.data);
            dispatch(changeLoader(false));
        }
        )
        .catch((err) => 
            console.log(err)
        )
    }, [])

    const add = (movie) => {
        dispatch(addFavorite(movie)) // action + store 
    }
    return(
        <>
        <div class="wrapper">
            <div class="main_card">
                <div class="card_left">
                    <div class="card_datails">
                        <h1>{movie.original_title}</h1>
                        <div class="card_cat">
                            <p class="PG">{movie.vote_average}</p>
                            <p class="year">{movie.release_date}</p>
                            <p class="genre">{movie.vote_count}</p>
                            <p class="time">{movie.original_language}</p>
                        </div>
                        <p class="disc">{movie.overview}</p>
                    <div class="social-btn">

                        <button class="btn-details">
                            <i class="fas fa-play"></i> SEE TRAILER
                        </button>
                        
                        <button class="btn-details">
                            <i class="fas fa-download"></i> DOWNLOAD
                        </button>
                        
                       
                        
                        <button className="btn-details" onClick={()=> add(movie)}>
                            <i class="fas fa-star" ></i>
                        </button>
                    </div>	
                    </div>
                </div>
                <div class="card_right">
                    <div class="img_container">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                        </div>
                        <div class="play_btn">
                            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                                <i class="fas fa-play-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MoviesDetialsComponant;