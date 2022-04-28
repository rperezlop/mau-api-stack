const conection = require('../../database/conexion');
const clientesQuery = require('../sql/clientes-sql')


const clientesRepository = {

    async getClientes(params) {
        console.log(params);
        return await conection.query(clientesQuery.getClientes, params);
    },

    async existsClienteByIdentification(identification) {
        const params = [identification];
        const result = await conection.query(clientesQuery.existsClienteByIdentification, params);
        return result[0];
    },

    async existsClienteByIdentificationToUpdate(clienteId, identification) {
        const params = [clienteId, identification];
        const result = await conection.query(clientesQuery.existsClienteByIdentificationToUpdate, params);
        return result[0];
    },

    async existsClienteById(clienteId, statusId){
        const result = await conection.query(clientesQuery.existsClienteById, [clienteId, statusId]);
        return result[0];

    },

    async createCliente(data) {
      
        const params = [
            data.identificationTypeId,
            data.identification,
            data.names, 
            data.lastName,
            data.ciudad,
            data.address,
            data.phone,
            data.email,
            data.statusId
            
           
        ];
        return await conection.query(clientesQuery.createCliente, params);
    },

    async updateCliente(data) {
        console.log('DESDE EL REPOSITORY');
        const params = [
            data.identificationTypeId,
            data.identification,
            data.names, 
            data.lastName,
            data.ciudad,
            data.address,
            data.phone,
            data.email,
            data.clienteId
           
        ];
        return await  conection.query(clientesQuery.updateCliente, params);
    },
    
    async deleteClientes(listClienteId, statusId) {
        const params = [statusId, listClienteId];
        return await conection.query(clientesQuery.deleteClientes, params);
    }
}

module.exports = clientesRepository;