const { Router } = require('express');

const users = require('./users');
const signUp = require('./signup');
const auth = require('./auth');

const apiRouter = Router();

apiRouter.use('/auth', auth);
apiRouter.use('/users', users);
apiRouter.use('/signup', signUp);

module.exports = apiRouter;
