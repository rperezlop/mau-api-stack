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
            Errr.newError(Errors.ObtenerClientesAll.Message)
            .set('errorCode', Errors.ObtenerClientesAll.Code)
            .debug(data)
            .appendTo(err).throw(); 
        }
    },

    async createCliente(data) {
       console.log('ESTE ES EL SERVICIO',data);
        try {
            data.statusId = 1; //Activo
            const { identification } = data;
            const existsClienteByIdentification = await clientesReposotory.existsClienteByIdentification(identification)

            if (existsClienteByIdentification && Object.keys(existsClienteByIdentification).length) {
                return handleMessage.statusCode(400).message(`Ya se encuentra un cliente registrado con esta identificacion ${identification}`).get();
            }
            else {
                await clientesReposotory.createCliente(data);
                return handleMessage.statusCode(200).message(`Zona credada con exito`).get();
            }
        } catch (err) {
            Errr.newError(Errors.CreateCliente.Message)
                .set('errorCode', Errors.CreateCliente.Code)
                .debug(data)
                .appendTo(err).throw();
        }

    },
}

module.exports = clientesServices;