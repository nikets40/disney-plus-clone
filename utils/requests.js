const API_KEY = process.env.API_KEY;
const baseURL= "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${baseURL}/trending/movie/day?api_key=${API_KEY}`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en_us`,
    fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=1079`,
    fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


export default requests;