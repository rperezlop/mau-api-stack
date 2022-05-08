const handleError = require('../../utils/middlewares/handleError');
const plansServices = require('../services/plans-services');
//const validator = require('../../utils/validator/clientes-validator');


const plansController = {

    async getPlansAll(req, res) {
        try {
            const result = await plansServices.getPlansALL();
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }
    },

    async createPlan(req, res) {
        try {
            const result = await plansServices.createPlan(req.body);
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res)
        }
    },


async updatePlan (req, res) {
    try {
        const result = await plansServices.updatePlan(req.body);
        return res.status(result.code).json(result.data);

    } catch (err) {
        handleError(err, req, res)
    }
}
}


module.exports = plansController;