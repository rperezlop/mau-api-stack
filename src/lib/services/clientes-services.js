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

    async updateCliente(data) {

        try {

            const { clienteId, identification } = data;
            const statusId = 1; //Avtivo
            const isExistClienteById = await clientesReposotory.existsClienteById(clienteId, statusId);
            const existIdentification = await clientesReposotory.existsClienteByIdentificationToUpdate(clienteId, identification);

            if (isExistClienteById) {

                if (existIdentification) {
                    return handleMessage.statusCode(400).message(`Ya existe un cliente con este número de identificación: ${identification}`).get();
                }
                await clientesReposotory.updateCliente(data);
                return handleMessage.statusCode(200).message('Cliente editado con exito').get();
            }
            return handleMessage.statusCode(400).message('Este cliente no se encuentra registrado').get();

        } catch (err) {
            Errr.newError(Errors.UpdateCliente.Message)
                .set('errorCode', Errors.UpdateCliente.Code)
                .debug(data)
                .appendTo(err).throw();
        }
    },

    async deleteClientes (data){
        try {
            const statusId = 3; //Elimindo
            const { listClienteId } = data;
            await clientesReposotory.deleteClientes(listClienteId, statusId);
      
            const message = listClienteId.length > 1 ? 'Cliente eliminados con exito' : 'cliente eliminado con exito';
            return handleMessage.statusCode(200).message(message).get();
      
          } catch (err) {
            Errr.newError(Errors.DeleteClientes.Message)
              .set('errorCode', Errors.DeleteClientes.Code)
              .debug(data)
              .appendTo(err).throw();
          }
        },
    }
module.exports = clientesServices;