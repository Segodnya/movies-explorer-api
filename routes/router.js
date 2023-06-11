const router = require('express').Router();
const { errors } = require('celebrate');
const cors = require('cors');
const NotFoundError = require('../utils/errors/notFoundError');

const moviesRouter = require('./movieRoutes');
const usersRouter = require('./userRoutes');

const { login, createUser } = require('../controllers/user');
const { validateLogin, validateRegister } = require('../utils/validators/userValidator');
const auth = require('../middlewares/auth');

const { errorLogger, requestLogger } = require('../middlewares/logger');

router.use(requestLogger);
router.use(cors());

// авторизация пользователя
router.post('/signin', validateLogin, login);
// регистрация пользователя
router.post('/signup', validateRegister, createUser);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый адрес не найден. Проверьте URL и метод запроса'));
});
router.use(errorLogger);
router.use(errors({ message: 'Ошибка валидации данных' }));

module.exports = router;
