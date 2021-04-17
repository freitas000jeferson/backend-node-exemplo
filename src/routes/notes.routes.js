const router = require('express').Router();
const { notesController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { note },
} = require('../validations');

// TODO: usar filtro pra nome
router.get('/', validate(note.list), notesController.list);
router.get('/:id', validate(note.get), notesController.get);

router.use(isAuthorizedAdmin);

router.post('/', validate(note.create), notesController.create);
router.put('/:id', validate(note.update), notesController.update);
router.delete('/:id', validate(note.destroy), notesController.destroy);

module.exports.notes = router;
