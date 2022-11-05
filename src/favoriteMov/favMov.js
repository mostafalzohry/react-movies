

import { useDispatch , useSelector } from "react-redux"
import { DeleteCart } from "../store/actions/favorite";
import './fav.css'

function FavoriteMovies(){
    let ListCart = [];
    const fav = useSelector((state) => state.favorite.Carts )
    const dispatch = useDispatch()
    
    Object.keys(fav).forEach(function(item){
        ListCart.push(fav[item]);
    });
    const Delete = (key) => {
        dispatch(DeleteCart(key))
    }
    return(
        <>
            <section class="h-100" style={{backgroundColor: '#eee'}}>
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-normal mb-0 text-black">Favorite Movies</h3>
                            </div>
                            {ListCart.map((movie,key)=>{
                            return(<div class="card mb-4 w-100">
                                <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        class="img-list"/>
                                    </div>
                                    <div class="col">
                                        <p class="lead fw-normal mb-2 text-danger">{movie.original_title}</p>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0 text-danger">{movie.vote_average}</h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="mb-0 text-danger">{movie.release_date}</h5>
                                    </div>
                                    <div class="col text-end">
                                        <a class="text-danger" onClick={()=>Delete(key)}><i class="fas fa-trash fa-lg"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>)
                            }
                            )}
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default FavoriteMovies