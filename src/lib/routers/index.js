const router = require('express').Router();

const plansRouter = require('./plans-router');
const clientesRouter = require('./clientes-router');
const ventasRouter = require('./ventas-router');

router.use('/clientes', clientesRouter);
router.use('/ventas', ventasRouter);
router.use('/plans', plansRouter);

module.exports = router;