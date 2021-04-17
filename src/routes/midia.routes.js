const router = require('express').Router();
const { midiasController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { midia },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(midia.list), midiasController.list);
router.get('/:id', validate(midia.get), midiasController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(midia.create), midiasController.create);
router.put('/:id', validate(midia.update), midiasController.update);
router.delete('/:id', validate(midia.destroy), midiasController.destroy);

module.exports.midias = router;
