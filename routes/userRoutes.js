const userRoutes = require('express').Router();

// eslint-disable-next-line object-curly-newline
const { updateUserName, getMe } = require('../controllers/user');
const { validateUserInfo } = require('../utils/validators/userValidator');

// возвращает информацию о пользователе (email и имя)
userRoutes.get('/me', getMe);
// обновляет информацию о пользователе (email и имя)
userRoutes.patch('/me', validateUserInfo, updateUserName);

module.exports = userRoutes;
