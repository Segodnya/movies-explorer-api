const movieRoutes = require('express').Router();

const { getMovies, deleteMovie, createMovie } = require('../controllers/movie');
const { validateMovieId, validateMovie } = require('../utils/validators/movieValidator');

// возвращает все сохранённые текущим  пользователем фильмы
movieRoutes.get('/', getMovies);
// создаёт фильм с переданными в теле
// country, director, duration, year, description, image,
// trailer, nameRU, nameEN и thumbnail, movieId
movieRoutes.post('/', validateMovie, createMovie);
// удаляет сохранённый фильм по id
movieRoutes.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = movieRoutes;
