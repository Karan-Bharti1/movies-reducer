import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "./movieSlice"
import { Link } from "react-router-dom"

const MovieView=()=>{
    const dispatch=useDispatch()
    const state=useSelector(state=>state.movies)
    useEffect(()=>{
dispatch(fetchMovies())
    },[])
return(<>
<h2 className="my-3">Movies</h2>
<Link className="btn btn-primary" to="/addmovie">Add New Movie</Link>
{state.status==="Loading" && <h2 className="my-3">Loading...</h2>}
{state.status==="Error" && <h2 className="my-3">Movies Not Found</h2>}
<ul className="list-group my-3">
{Array.isArray(state.movies) && state.movies.map(movie=><li className="list-group-item" key={movie._id}>{movie.title}- Author: {movie.author}- Genre: {movie.genre}</li>)}
</ul>
</>)
}
export default MovieView