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

    async createCliente(data) {
        const params = [
            data.identificationType,
            data.identification,
            data.names, data.lastName,
            data.phone,
            data.email,
            data.address,
            data.namePlan,
            data.pricePlan,
            data.nameDestination,
            data.createdAt,
            data.statusId
        ];
        return await conection.query(clientesQuery.createCliente, params);
    },
}

module.exports = clientesRepository;