const Errr = require('errr');
const Errors = require('../../utils/constantes/error');
const handleMessage = require('../../utils/constantes/handleMessage');
const clientesReposotory = require('../repositories/cliente-repository');


const clientesServices = {

    async getClientes(data) {
        const statusId = 3; //Eliminados 
        try {
            const clientes = await clientesReposotory.getClientes(statusId);
            return handleMessage.statusCode(200).message(clientes).get();

        } catch (err) {
            Errr.newError(Errors.CreateClientes.Message)
            .set('errorCode', Errors.CreateClientes.Code)
            .debug(data)
            .appendTo(err).throw(); 
        }
    }
}

module.exports = clientesServices;