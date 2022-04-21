const router = require('express').Router();
const clientesController = require('../controllers/clientes-controller');

router.get('/', clientesController.getClientes);

module.exports = router;