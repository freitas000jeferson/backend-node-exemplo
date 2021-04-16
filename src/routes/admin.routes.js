const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const { adminController } = require('../controllers');
const { validate, isAuthorizedAdmin } = require('../middlewares');
const {
  validationSchemas: { admin },
} = require('../validations');

router.use(isAuthorizedAdmin);

router.put('/:id/change', validate(admin.id), adminController.change);

router.get('/', async (req, res) =>
  res.status(StatusCodes.OK).json({ body: 'GET OK!!!' })
);

module.exports.admin = router;
