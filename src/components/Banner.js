import React, { useEffect } from 'react'
import "./Banner.css"
import categorias, { getMovies } from '../api';

function Banner() {
    const [movie, setMovie] = React.useState({});
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!${movie.backdrop_path}`)

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categorias.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log ("Banner fetchRandomMovie error:", error);
        }
    }
    useEffect (() => {
        fetchRandomMovie();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }
    
  return (
    <header className='banner-container'
        style={{
            backgoundSize: "cover",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, #000000 100%), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center-center",    
        }}>
        <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons-container">
          <button className="banner-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="PlayStandard" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg> Play</button>
          <button className="banner-button">My List</button>
        </div>
        <div className="banner-description">
          <h2>{truncate(movie?.overview, 150)}</h2>
        </div>
      </div>
    </header>
  );
}

export default Banner