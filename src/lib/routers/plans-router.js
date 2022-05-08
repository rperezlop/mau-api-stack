const router = require('express').Router();
const plansController = require('../controllers/plans-cotroller');

router.get('/', plansController.getPlansAll);
router.post('/', plansController.createPlan);
router.put('/', plansController.updatePlan);

module.exports = router;