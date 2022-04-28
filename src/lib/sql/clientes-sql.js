const conection = require('../../database/conexion');

const clientesSql = {

    getClientes: `
    SELECT clientes.id,
    tiId.name AS idType,
    clientes.identification,
    clientes.names,
    clientes.last_name AS lastName,
    clientes.ciudad,
    clientes.address,
    clientes.phone, 
    clientes.email
    FROM ${conection.database}.clientes 
    INNER JOIN ${conection.database}.identification_type tiId ON clientes.identification_type_id = tiId.id
    WHERE clientes.status_id != ?
    ORDER BY clientes.names ASC   
    `,

    existsClienteByIdentification: `
       SELECT id
       FROM ${conection.database}.clientes 
       WHERE identification = ?
    `,

    existsClienteByIdentificationToUpdate: `
       SELECT  identification 
       FROM ${conection.database}.clientes
       WHERE id != ? AND identification = ? 
    `,

    existsClienteById: `
       SELECT *
       FROM ${conection.database}.clientes
       WHERE id = ? AND status_id = ? LIMIT 1
        `,

    createCliente: `
      INSERT INTO ${conection.database}.clientes
      (identification_type_id, identification, names, last_name, ciudad, address, phone, email, status_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)  
    `,

    updateCliente: `
    UPDATE ${conection.database}.clientes
    SET 
    identification_type_id = ?,
    identification = ?,
    names = ?,
    last_name = ?, 
    ciudad = ?,
    address = ?,
    phone = ?,
    email = ?
    WHERE id = ?
    `,

    deleteClientes: `
    UPDATE ${conection.database}. clientes
     SET 
     status_id = ?
     WHERE id IN(?)
    `,



}
module.exports = clientesSql;