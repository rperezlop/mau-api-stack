const handleError = require('../../utils/middlewares/handleError');
const clientesServices = require('../services/clientes-services');


const clientesController = {
    async getClientes(req, res) {
        try {
            const result = await clientesServices.getClientes();
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }
    },

    async createCliente(req, res) {
        try {
            const result = await clientesServices.createCliente(req.body);
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }

    },
}
module.exports = clientesController;