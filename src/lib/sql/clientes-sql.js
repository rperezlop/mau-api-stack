const conection = require('../../database/conexion');


const clientesSql = {
    getClientes: `
        SELECT *
        FROM ${conection.database}.clientes
        WHERE status_id != ?
      
    `,
}

module.exports = clientesSql;