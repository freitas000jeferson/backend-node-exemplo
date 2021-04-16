const router = require('express').Router();
const { typemidiasController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { type },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(type.list), typemidiasController.list);
router.get('/:id', validate(type.get), typemidiasController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(type.create), typemidiasController.create);
router.put('/:id', validate(type.update), typemidiasController.update);
router.delete('/:id', validate(type.destroy), typemidiasController.destroy);

module.exports.typemidias = router;
