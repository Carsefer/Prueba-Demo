require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getMovies = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      let movies = [];
      let page = 1;
      while (page < 14) {
        page++;
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&page=${page}`
        );
        const apiInfo = response.data.results?.map((e) => {
          return {
            id: e.id,
            name: e.title,
            image: `https://image.tmdb.org/t/p/w500${e.poster_path}`,
            genres: e.genre_ids,
            overview: e.overview,
          };
        });
        movies = [...movies, ...apiInfo];
      }

      res.send(movies);
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      let movies = [];
      let page = 1;
      while (page < 14) {
        page++;
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
        );
        const apiInfo = response.data.results?.map((e) => {
          return {
            id: e.id,
            name: e.title,
            image: `https://image.tmdb.org/t/p/w500${e.poster_path}`,
            genres: e.genre_ids,
            overview: e.overview,
          };
        });
        movies = [...movies, ...apiInfo];
      }

      res.send(movies);
    } catch (error) {
      console.error(error);
    }
  }
};
const movieDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const detailMovie = await axios.get(`
  https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    res.send(detailMovie.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getMovies,
  movieDetail,
};
