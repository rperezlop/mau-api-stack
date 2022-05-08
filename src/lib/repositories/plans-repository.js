const conection = require('../../database/conexion');
const plansQuery = require('../sql/plans-sql');

const plansRepository = {

    async getPlansAll(params) {
        return await conection.query(plansQuery.getPlansAll, params);
    },

    async existPlansByCode(code) {

        const params = [code]
        const result = await conection.query(plansQuery.existPlansByCode, params);
        return result[0];
    },

    async existsPlansByNameToUpdate(planId, name){
        const params = [planId, name]
        const result = await conection.query(plansQuery.existsPlansByNameToUpdate,params);
        return result[0];
    },
    async existsPlansByCodeToUpdate(planId, code){
        const params = [planId, code]
        const result = await conection.query(plansQuery.existsPlansByCodeToUpdate,params);
        return result[0];
    },

    async existePlansByName(name) {
        const params = [name]
        const result = await conection.query(plansQuery.existePlansByName, params);
        return result[0]
    },

    async existPlansById(planId, statusId) {
        const params = [planId, statusId]
        const result = await conection.query(plansQuery.existPlansById, params);
        return result[0]
    },

    async createPlan(data) {
        const params = [
            data.code,
            data.name,
            data.description,
            data.destination,
            data.price,
            data.statusId
        ];
        return await conection.query(plansQuery.createPlan, params);
    },

    async updatePlan(data) {
        console.log('DESDE EL REPO',data);
        const params = [
            data.code,
            data.name,
            data.description,
            data.destination,
            data.price,
            data.planId
        ];
        return await conection.query(plansQuery.updatePlan, params);
    },
}

module.exports = plansRepository;