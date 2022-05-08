const router = require('express').Router();
const ventasController = require('../controllers/ventas-controller');

router.get('/', ventasController.getVentasAll);

module.exports = router;