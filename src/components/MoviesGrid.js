import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleMoviesSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

    useEffect(() => {
        fetch("movies.json").then(response => response.json()).then(m => {
            setMovies(m);
        })
    }, [])

    return (
        <div>
            <input type="text" className="search-input" placeholder="Search for movie..." value={searchTerm} onChange={handleMoviesSearch}/>

            <div className='movies-grid'>
                {filteredMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>

    )
}