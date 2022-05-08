const conection = require('../../database/conexion');


const ventasQuery = {

    getVentasAll: `
    SELECT 
    ventas.id,
    customers.identification,
    customers.name AS nameCliente,
    customers.last_name AS lasName,
    plan.name AS namePlan,
    plan.description,
    plan.destination,
    plan.price,
    pago.name,
    ventas.value AS abono,
    ventas.remaining_price AS remainingPrice,
    ventas.payment_date AS fechaPago
    FROM costumers_plans ventas
    INNER JOIN ${conection.database}.customers customers ON ventas.customers_id = customers.id
    INNER JOIN ${conection.database}.plans plan ON ventas.plans_id = plan.id
    INNER JOIN ${conection.database}.payment_methods pago ON ventas.payment_id = pago.id

    WHERE ventas.status_id != 3
      ORDER BY name ASC
      
    `,

}

module.exports = ventasQuery;