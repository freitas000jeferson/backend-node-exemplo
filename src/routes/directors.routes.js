const router = require('express').Router();
const { directorsController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { person },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(person.list), directorsController.list);
router.get('/:id', validate(person.get), directorsController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(person.create), directorsController.create);
router.put('/:id', validate(person.update), directorsController.update);
router.delete('/:id', validate(person.destroy), directorsController.destroy);

module.exports.directors = router;
