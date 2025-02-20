import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import MovieForm from "../components/MovieForm";
import { useDispatch, useSelector } from "react-redux";
import { postMovie } from "../features/movies/movieSlice";

const AddNewMovie=()=>{
    const [movieData,setMovieData]=useState({
        title:"",
        genre:"",
        director:""
    })
    const dispatch=useDispatch()
    const [message,setMessage]=useState("")
    const state=useSelector(state=>state.movies)
    console.log(state)
    const handleChange=(event)=>{
const {name,value}=event.target
setMovieData(prev=>({
    ...movieData,[name]:value
}))

    }
    const handleSubmit=e=>{
        e.preventDefault()
     dispatch(postMovie(movieData))  
     if(state.status==="Succeeded"){
        setMessage("Data Posted Successfully") 
        setMovieData({
            title:"",
            genre:"",
            director:""
      })
      setTimeout(()=>{
          setMessage("")
      },2000)
    } 
    }
    return(<>
    <Header/>
    <main className="container">
    <h2 className="my-3">Add New Movies</h2>
<Link to="/" className="btn btn-primary">Back To Movies</Link>
<form onSubmit={handleSubmit} className="my-3">
<MovieForm movieData={movieData} handleChange={handleChange}/>
</form>
<h2>{message}</h2>
    { state.status=="Error" && <h2>Failed to add Movie to the database</h2>}
    </main>
    </>)
}
export default AddNewMovie;