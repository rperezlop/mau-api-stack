const conection = require('../../database/conexion');
const ventasQuery = require('../sql/ventas-sql');

const ventasRepository = {

    async getVentasAll(params) {
        return await conection.query(ventasQuery.getVentasAll, params);
    }
}

module.exports = ventasRepository;