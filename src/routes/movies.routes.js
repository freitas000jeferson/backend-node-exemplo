const router = require('express').Router();
const { moviesController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { movies },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(movies.list), moviesController.list);
// deu erro esse filtro
// router.get('/query', validate(movies.listQuery), moviesController.listquery);
router.get('/:id', validate(movies.get), moviesController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(movies.create), moviesController.create);
router.put('/:id', validate(movies.update), moviesController.update);
router.put('/:id/enable', validate(movies.get), moviesController.enable);
router.put('/:id/disable', validate(movies.get), moviesController.disable);

router.put(
  '/:id/add-actor',
  validate(movies.addId),
  moviesController.add_actor
);
router.put(
  '/:id/remove-actor/:removeId',
  validate(movies.removeId),
  moviesController.remove_actor
);

router.put(
  '/:id/add-writer',
  validate(movies.addId),
  moviesController.add_writer
);
router.put(
  '/:id/remove-writer/:removeId',
  validate(movies.removeId),
  moviesController.remove_writer
);

router.put(
  '/:id/add-director',
  validate(movies.addId),
  moviesController.add_director
);
router.put(
  '/:id/remove-director/:removeId',
  validate(movies.removeId),
  moviesController.remove_director
);

router.put(
  '/:id/add-category',
  validate(movies.addId),
  moviesController.add_category
);
router.put(
  '/:id/remove-category/:removeId',
  validate(movies.removeId),
  moviesController.remove_category
);

// router.delete('/:id', validate(movies.destroy), moviesController.destroy);

module.exports.movies = router;
