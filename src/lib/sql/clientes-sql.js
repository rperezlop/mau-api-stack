const conection = require('../../database/conexion');

const clientesSql = {

    getClientes: `
    SELECT customers.id,
    tiId.name AS idType,
    customers.identification,
    customers.name,
    customers.last_name AS lastName,
    customers.town,
    customers.address,
    customers.phone, 
    customers.email
    FROM ${conection.database}.customers 
    INNER JOIN ${conection.database}.identification_type tiId ON customers.identification_type_id = tiId.id
    WHERE customers.status_id != ?
    ORDER BY customers.name ASC   
    `,

    existsClienteByIdentification: `
       SELECT id
       FROM ${conection.database}.customers 
       WHERE identification = ?
    `,

    existsClienteByIdentificationToUpdate: `
       SELECT  identification 
       FROM ${conection.database}.customers
       WHERE id != ? AND identification = ? 
    `,

    existsClienteById: `
       SELECT *
       FROM ${conection.database}.customers
       WHERE id = ? AND status_id = ? LIMIT 1
        `,

    createCliente: `
      INSERT INTO ${conection.database}.customers
      (identification_type_id, identification, name, last_name, town, address, phone, email, status_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)  
    `,

    updateCliente: `
    UPDATE ${conection.database}.customers
    SET 
    identification_type_id = ?,
    identification = ?,
    name = ?,
    last_name = ?, 
    town = ?,
    address = ?,
    phone = ?,
    email = ?
    WHERE id = ?
    `,

    deleteClientes: `
    UPDATE ${conection.database}. customers
     SET 
     status_id = ?
     WHERE id IN(?)
    `,
}
module.exports = clientesSql;