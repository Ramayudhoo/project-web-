import "./popular.css"
import { useEffect, useState } from "react"
import {getMovieList} from "../api"

function App() {
const App = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const popularMoviesList = () => {
        return popularMovies.map((movie, i)=>{
            return(
                <div className="Movie-wrapper" key={i}>
                    <div className="Movie-title">{movie.title}</div>
                    <img className="Movie-image" src={movie.poster_path}/>
                    <div className="Movie-date">{movie.release_date}</div>
                    <div className="Movie-rate">{movie.vote_average}</div>  
                </div>
            )
        })
    }


    return (
        <div classname="App">
                <h1>popular movie</h1>
        <div className="Movie-container">
        <popularMoviesList/>
        </div>
        </div>
    )
    }
}
export default Popular
