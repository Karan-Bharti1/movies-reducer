import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { moviesUrl } from "../../url";
export const fetchMovies=createAsyncThunk("movies/fetchMovies",async()=>{
    const response=await axios.get(moviesUrl)
    return response.data
})
export const postMovie=createAsyncThunk("movies/postMovies",async(data)=>{
    const response=await axios.post(moviesUrl,data,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response.data
})
export const movieSlice=createSlice({
    name:"movies",
    initialState:{
        movies:[],
        status:"Idle",
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(fetchMovies.pending,state=>{
    state.status="Loading"
})
builder.addCase(fetchMovies.fulfilled,(state,action)=>{
    state.status="Succeeded"
    state.movies=action.payload
})
builder.addCase(fetchMovies.rejected,(state,action)=>{
    state.status="Error"
    state.error=action.payload
})
builder.addCase(postMovie.pending,state=>{
    state.status="Loading"
})
builder.addCase(postMovie.fulfilled,(state,action)=>{
    state.status="Succeeded"
    state.movies=state.movies.push(action.payload)
})
builder.addCase(postMovie.rejected,(state,action)=>{
    state.status="Error"
    state.error=action.payload
})
    }
})
export default movieSlice.reducer