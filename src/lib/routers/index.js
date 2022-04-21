const router = require('express').Router();

const clientesRouter = require('./clientes-router');

router.use('/clientes', clientesRouter);
module.exports = router;