const conection = require('../../database/conexion');

const clientesSql = {

    getClientes: `
        SELECT clientes.id,
        clientes.identification,
        clientes.names,
        clientes.last_name AS lastName,
        clientes.phone, 
        clientes.email,
        clientes.address,
        plans.name AS namePlan,
        plans.price AS pricePlan,
        destinations.name AS nameDestination,
        clientes.created_at AS createdAt
        FROM ${conection.database}.clientes 
        INNER JOIN ${conection.database}.planes plans ON clientes.plans_id = plans.id
        INNER JOIN ${conection.database}.destinos destinations ON clientes.destination_id = destinations.id
        WHERE clientes.status_id != ?
        ORDER BY clientes.names ASC      
    `,
    existsClienteByIdentification: `
       SELECT identification
       FROM ${conection.database}.clientes 
       WHERE identification = ?
       LIMIT 1
    `,
    createCliente: `
      INSERT INTO ${conection.database}.clientes
      (identification_type, identification, names, last_name, phone, email, address, plans_id, destination_id, status_id,created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)  
    `,

}
module.exports = clientesSql;