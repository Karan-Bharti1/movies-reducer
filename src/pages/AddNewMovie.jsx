import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import MovieForm from "../components/MovieForm";

const AddNewMovie=()=>{
    const [movieData,setMovieData]=useState({
        title:"",
        genre:"",
        director:""
    })
    const handleChange=(event)=>{
const {name,value}=event.target
setMovieData(prev=>({
    ...movieData,[name]:value
}))
    }
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(movieData)
    }
    return(<>
    <Header/>
    <main className="container">
    <h2 className="my-3">Add New Movies</h2>
<Link to="/" className="btn btn-primary">Back To Movies</Link>
<form onSubmit={handleSubmit}>
<MovieForm movieData={movieData} handleChange={handleChange}/>
</form>
    </main>
    </>)
}
export default AddNewMovie;