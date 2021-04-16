const router = require('express').Router();
const { writersController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { person },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(person.list), writersController.list);
router.get('/:id', validate(person.get), writersController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(person.create), writersController.create);
router.put('/:id', validate(person.update), writersController.update);
router.delete('/:id', validate(person.destroy), writersController.destroy);

module.exports.writers = router;
