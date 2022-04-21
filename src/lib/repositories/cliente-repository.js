const conection = require('../../database/conexion');
const clientesQuery = require('../sql/clientes-sql')


const clientesRepository = {

    async getClientes(params) {
    console.log(params);
        return await conection.query(clientesQuery.getClientes, params);
    }
}

module.exports = clientesRepository;