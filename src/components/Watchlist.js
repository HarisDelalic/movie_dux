import '../styles.css';
import React from "react";
import MovieCard from "./MovieCard";

export default function Watchlist({movies, watchlist, toggleWatchlist}) {
    return (
        <div className="watchlist">
            {watchlist.map(id => {
                const movie = movies.find(movie => movie.id === id)
                return <MovieCard movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true}></MovieCard>
            })}
        </div>)
}