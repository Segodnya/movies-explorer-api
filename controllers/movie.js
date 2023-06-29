const mongoose = require('mongoose');
const Movie = require('../models/movie');
const { DEFAULT_SUCCESS_CODE, SUCCESS_CREATED_CODE } = require('../utils/constants');
const BadRequestError = require('../utils/errors/badRequestError');
const NotFoundError = require('../utils/errors/notFoundError');
const ForbiddenError = require('../utils/errors/forbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.status(DEFAULT_SUCCESS_CODE).send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.status(SUCCESS_CREATED_CODE).send(movie))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  const currentUserId = req.user._id;

  Movie.findById(req.params._id)
    .orFail()
    .then((movie) => {
      if (movie.owner.toString() !== currentUserId) {
        throw new ForbiddenError('Нельзя удалить чужую карточку');
      }
      return movie;
    })
    .then((movie) => movie.deleteOne())
    .then((deletedMovie) => res.status(DEFAULT_SUCCESS_CODE).send(deletedMovie))
    .catch((err) => {
      if (err instanceof mongoose.Error.DocumentNotFoundError) {
        return next(new NotFoundError('Карточка не найдена'));
      }
      if (err instanceof mongoose.Error.CastError) {
        return next(new BadRequestError('Переданы не валидные данные'));
      }
      return next(err);
    });
};
