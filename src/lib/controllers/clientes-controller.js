const handleError = require('../../utils/middlewares/handleError');
const clientesServices = require('../services/clientes-services');
const validator = require('../../utils/validator/clientes-validator');


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
            validator.createClienteValidator(req.body)
            const result = await clientesServices.createCliente(req.body);
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }
    },

    async updateCliente(req, res) {
        try {
            const result = await clientesServices.updateCliente(req.body);
            return res.status(result.code).json(result.data);

        } catch (err) {
            handleError(err, req, res);
        }
    },

    async deleteClientes(req, res) {
        try {
            const result = await clientesServices.deleteClientes(req.body);
            return res.status(result.code).json(result.data);
        } catch (err) {
            handleError(err, req, res);
        }
    }
}
module.exports = clientesController;