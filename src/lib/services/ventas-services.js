const Errr = require('errr');
const Errors = require('../../utils/constantes/error');
const handleMessage = require('../../utils/constantes/handleMessage');
const ventasRepository = require('../repositories/ventas-repository');


const ventasServices = {

    async getVentasAll(data) {
        try {
            const statusId = 3; //Eliminados
            const ventas = await ventasRepository.getVentasAll(statusId);
            return handleMessage.statusCode(200).message(ventas).get();

        } catch (err) {
            Errr.newError(Errors.ObtenerVentasAll.Message)
                .set('errorCode', Errors.ObtenerVentasAll.Code)
                .debug(data)
                .appendTo(err).throw();
        }
    }
}
module.exports = ventasServices;