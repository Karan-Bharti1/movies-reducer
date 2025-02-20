const MovieForm=({movieData,handleChange})=>{
    return(<>
        <label htmlFor="title">Title:</label>
    <input type="text" id="title"  value={movieData.title} name="title" className="form-control" onChange={handleChange}/>
    <label htmlFor="genre">Genre:</label>
    <input type="text" id="genre"  value={movieData.genre} name="genre" className="form-control" onChange={handleChange}/>
    <label htmlFor="director">Director:</label>
    <input type="text" id="director"  value={movieData.director} name="director" className="form-control" onChange={handleChange}/>
<button type="submit" className="btn btn-primary my-3">Submit</button></>)
}
export default MovieForm;