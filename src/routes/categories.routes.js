const router = require('express').Router();
const { categoriesController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { person },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(person.list), categoriesController.list);
router.get('/:id', validate(person.get), categoriesController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(person.create), categoriesController.create);
router.put('/:id', validate(person.update), categoriesController.update);
router.delete('/:id', validate(person.destroy), categoriesController.destroy);

module.exports.categories = router;
