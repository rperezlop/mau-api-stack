const router = require('express').Router();
const clientesController = require('../controllers/clientes-controller');

router.get('/', clientesController.getClientes);
router.post('/', clientesController.createCliente);

module.exports = router;