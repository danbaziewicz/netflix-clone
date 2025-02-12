const API_KEY = "917e48a57cf078c2f45fbb6442d09ace";

const categorias = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?language=en-US&api_key=${API_KEY}`
    },
    {
        name: "netflixOriginais",
        title: "Originais Netflix",
        path: `/discover/tv?with_network=213&api_key=${API_KEY}`
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?language=en-US&api_key=${API_KEY}`
    },
    {
        name: "comedy",
        title: "Comédia",
        path: `/discover/tv?with_genres=35&api_key=${API_KEY}`
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?with_genres=10749&api_key=${API_KEY}`
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?with_genres=99&api_key=${API_KEY}`
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
}

export default categorias;