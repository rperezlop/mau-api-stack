const conection = require('../../database/conexion');


const plansSql= {

    getPlansAll: `
       SELECT 
       plans.id,
       plans.code,
       plans.name,
       plans.description,
       plans.destination,
       plans.price
       FROM ${conection.database}.plans
       WHERE status_id != ? 
       ORDER BY plans.name ASC 
    `,
        existPlansByCode: `
        SELECT id
        FROM ${conection.database}.plans
        WHERE code = ?
    `,
        existePlansByName: `
        SELeCT id
        FROM ${conection.database}.plans
        WHERE LOWER(REPLACE(name, ' ', '')) = ? 

        `,
        existPlansById: `
        SELECT id
        FROM ${conection.database}.plans
        WHERE id = ? AND status_id = ? LIMIT 1
    `,
        createPlan: `
        INSERT INTO  ${conection.database}.plans
        (code, name, description, destination, price,status_id)
        VALUES (?,?,?,?,?,?)
    `,

        existsPlansByNameToUpdate: `
         SELECT id
         FROM ${conection.database}.plans
         WHERE LOWER(REPLACE(name, ' ', '')) = ? AND id != ?
    `,

         existsPlansByCodeToUpdate: `
         SELECT id
         FROM ${conection.database}.plans
         WHERE code = ? AND id != ?
    `,
        updatePlan: `
        UPDATE ${conection.database}.plans
        SET
        code = ?,
        name = ?,
        description = ?, 
        destination = ?,
        price = ?
        WHERE id = ?
    `,

    deletePlan: `
    
    `,
}


module.exports = plansSql;