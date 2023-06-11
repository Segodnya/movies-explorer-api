const mongoose = require('mongoose');
const { URL_REGEXP } = require('../utils/constants');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
    director: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
    duration: {
      type: Number,
      required: [true, 'Поле должно быть заполнено'],
    },
    year: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
    description: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
    image: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      validate: {
        validator: (v) => URL_REGEXP.test(v),
        message: 'Некорректный URL',
      },
    },
    trailerLink: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      validate: {
        validator: (v) => URL_REGEXP.test(v),
        message: 'Некорректный URL',
      },
    },
    thumbnail: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      validate: {
        validator: (v) => URL_REGEXP.test(v),
        message: 'Некорректный URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: [true, 'Поле должно быть заполнено'],
    },
    nameRU: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
    nameEN: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
