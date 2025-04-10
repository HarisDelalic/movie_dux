import React from 'react';
import '../styles.css';

export default function MovieCard({movie, isWatchlisted, toggleWatchlist}) {

    let handleMissingImage = (e) => {
        e.target.src = "images/default.jpg"
    }

    const getStatusClass = (rating) => {
        if (rating > 7) return "rating-good";
        if (rating > 4) return "rating-ok";
        return "rating-bad";
    };

    return (
        <div className='movie-card'>
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleMissingImage}/>

            <div className='movie-card'>
                <h3 className='movie-card-title'>{movie.title}</h3>
                <p className='movie-card-genre'>{movie.genre}</p>
                <p className={`movie-card-rating ${getStatusClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    )
}