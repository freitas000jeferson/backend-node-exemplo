const router = require('express').Router();
const { moviesController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { movies },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(movies.list), moviesController.list);
router.get('/:id', validate(movies.get), moviesController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(movies.create), moviesController.create);
router.put('/:id', validate(movies.update), moviesController.update);
router.put('/:id/enable', validate(movies.get), moviesController.enable);
router.put('/:id/disable', validate(movies.get), moviesController.enable);

// router.delete('/:id', validate(movies.destroy), moviesController.destroy);

module.exports.movies = router;
