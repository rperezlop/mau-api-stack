const handleError = require('../../utils/middlewares/handleError');
const ventasServices = require('../services/ventas-services');


const ventasController = {
    async getVentasAll(req, res) {
        try {
            const result = await ventasServices.getVentasAll();
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }
    }
}
module.exports = ventasController;