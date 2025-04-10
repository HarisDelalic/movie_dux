import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MovieCard from "./components/MovieCard";
import {useEffect, useState} from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const [watchlist, setWatchlist] = useState([1,2,3]);

    useEffect(() => {
        fetch("movies.json").then(response => response.json()).then(m => {
            setMovies(m);
        })
    }, [])

    const toggleWatchlist = (movieId) => {
        // eslint-disable-next-line no-unused-expressions
        setWatchlist((prevState) => { prevState.includes(movieId) ? prevState.filter(id => id !== movieId) : [...prevState, movieId] })
    }

    return (
        <div className="App">

            <div className="container">
                <Header></Header>

                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/watchlist">Watchlist</Link>
                            </li>
                        </ul>

                    </nav>
                    <Routes>
                        <Route path="/" element={<MoviesGrid movies = {movies} watchlist = {watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
                        <Route path="/watchlist" element={<Watchlist  movies = {movies} watchlist = {watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
                    </Routes>
                </Router>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App;
