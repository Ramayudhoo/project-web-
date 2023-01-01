import axios from "axios";

const apikey = process.env.REACT_APP_TMDB_KEY
const baseurl = process.env.REACT_APP_BASE_URL

export const getMovieList = async () => {
    const movie = await axios.get (`${baseurl}/movie/popular?
    &page=1&api_key=${apikey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get (`${baseurl}/search/movie?
    query=${q}&page=1&api_key=${apikey}`)
    return search.data
}