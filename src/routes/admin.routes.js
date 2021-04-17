const router = require('express').Router();
const { adminController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { admin },
} = require('../validations');

router.use(isAuthorizedAdmin);

router.put('/:id/change', validate(admin.id), adminController.change);

router.put('/:id/enable', validate(admin.id), adminController.enableUser);
router.put('/:id/disable', validate(admin.id), adminController.disableUser);

module.exports.admin = router;
