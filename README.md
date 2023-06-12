# movies-explorer-api

## Server Domain

https://api.sgdn.nomoredomains.rocks

## Endpoints

- возвращает информацию о пользователе (email и имя)
  `GET /users/me`

- обновляет информацию о пользователе (email и имя)
  `PATCH /users/me`

- возвращает все сохранённые текущим пользователем фильмы
  `GET /movies`

- создаёт фильм с переданными в теле country, director, duration, year, description, image, trailerLink, nameRU, nameEN и thumbnail, movieId
  `POST /movies`

- удаляет сохранённый фильм по id
  `DELETE /movies/_id`

- регистрация пользователя
  `POST /signup`

- авторизация пользователя
  `POST /signin`
