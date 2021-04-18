const router = require('express').Router();
const { ratesController } = require('../controllers');
const { validate, isAuthorized } = require('../middlewares');
const {
  validationSchemas: { rates },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/:id', validate(rates.get), ratesController.get);
router.use(isAuthorized);

router.get('/', validate(rates.list), ratesController.list);
router.post('/', validate(rates.create), ratesController.create);
router.put('/:id', validate(rates.update), ratesController.update);
router.delete('/:id', validate(rates.destroy), ratesController.destroy);

module.exports.rates = router;
