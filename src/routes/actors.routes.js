const router = require('express').Router();
const { actorsController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { person },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(person.list), actorsController.list);
router.get('/:id', validate(person.get), actorsController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(person.create), actorsController.create);
router.put('/:id', validate(person.update), actorsController.update);
router.delete('/:id', validate(person.destroy), actorsController.destroy);

module.exports.actors = router;
