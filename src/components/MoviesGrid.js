import React, {useState} from 'react';
import '../styles.css';
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies, watchlist, toggleWatchlist}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres")
    const [rating, setRating] = useState("All")

    const handleMoviesSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre === genre.toLowerCase()
    }

    const matchesRating = (movie, rating) => {
        switch (rating) {
            case "All":
                return true;
            case "Good":
                return movie.rating >= 7;
            case "Ok":
                return movie.rating >= 4 && movie.rating < 7;
            case "Bad":
                return movie.rating < 4;
            default:
                return false;
        }
    };

    const filteredMovies = movies.filter((movie) => matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, genre) && matchesRating(movie, rating))

    return (
        <div>
            <input type="text" className="search-input" placeholder="Search for movie..." value={searchTerm} onChange={handleMoviesSearch}/>

            <div className="filter-bar">
                <div className="filter-slot">
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Fantasy</option>
                        <option>Drama</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
                {filteredMovies.map(movie => (
                    <MovieCard movie={movie} isWatchlisted = {watchlist.includes(movie.id)} toggleWatchlist = {toggleWatchlist} key={movie.id}></MovieCard>
                ))}
            </div>
        </div>

    )
}