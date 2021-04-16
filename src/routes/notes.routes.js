const router = require('express').Router();
const { notesController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { person },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(person.list), notesController.list);
router.get('/:id', validate(person.get), notesController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(person.create), notesController.create);
router.put('/:id', validate(person.update), notesController.update);
router.delete('/:id', validate(person.destroy), notesController.destroy);

module.exports.notes = router;
