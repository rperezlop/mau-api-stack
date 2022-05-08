const Errr = require('errr');
const Errors = require('../../utils/constantes/error');
const handleMessage = require('../../utils/constantes/handleMessage');
const plansRepository = require('../repositories/plans-repository');
const handleReplaceSpaces = require('../../utils/functions/handleReplaceSpaces');

const plansServices = {
    async getPlansALL(data) {

        try {
            const statusId = 3; //Eliminados
            const plans = await plansRepository.getPlansAll(statusId);
            return handleMessage.statusCode(200).message(plans).get();

        } catch (err) {
            Errr.newError(Errors.ObtenerPlansALL.Message)
                .set('errorCode', Errors.ObtenerPlansALL.Code)
                .debug(data)
                .appendTo(err).throw();

        }

    },

    async createPlan(data) {
        try {
            data.statusId = 1; //Activo
            const { code, name } = data;
            const existPlansByCode = await plansRepository.existPlansByCode(code);
            const replaceSpacesName = handleReplaceSpaces(name);
            const existsZonesByName = await plansRepository.existePlansByName(replaceSpacesName);

            if (existPlansByCode && Object.keys(existPlansByCode).length) {
                return handleMessage.statusCode(400).message(`Ya se encuentra un plan registrado con este code ${code}`).get();
            }

            if (existsZonesByName && Object.keys(existsZonesByName).length) {
                return handleMessage.statusCode(400).message(`Ya se encuentra un plan  registrado con este nombre ${name}`).get();
            } else {

                await plansRepository.createPlan(data);
                return handleMessage.statusCode(200).message('Plan creado con exito').get();                
            }

        } catch (err) {
            Errr.newError(Errors.CreatePlans.Message)
                .set('errorCode', Errors.CreatePlans.Code)
                .debug(data)
                .appendTo(err).throw();
        }
    },

    async updatePlan(data) {
        try {
            const { code, planId, name } = data;
            const statusId = 1; //Activo
            const replaceSpacesName = handleReplaceSpaces(name);

            const existPlansById = await plansRepository.existPlansById(planId, statusId);
            const existsZonesByName = await plansRepository.existsPlansByNameToUpdate(replaceSpacesName, planId);
            const existPlansByCode = await plansRepository.existsPlansByCodeToUpdate(code, planId);

            if (existPlansById) {

                if (existPlansByCode) {
                    return handleMessage.statusCode(400).message(`Ya se encuentra un plan  registrado con este codigo ${code}`).get();
                }
                if (existsZonesByName) {
                    return handleMessage.statusCode(400).message(`Ya se encuentra un plan  registrado con este nombre ${name}`).get();
                }
                else {
                    await plansRepository.updatePlan(data);
                    return handleMessage.statusCode(200).message('Plan editado con exito').get();
                }
            }

            return handleMessage.statusCode(400).message('Este plan no se encuentra registrada').get();

        } catch (err) {
            Errr.newError(Errors.UpdatePlans.Message)
                .set('errorCode', Errors.UpdatePlans.Code)
                .debug(data)
                .appendTo(err).throw();
        }
    }
}
module.exports = plansServices;