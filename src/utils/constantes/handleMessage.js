const codes = {
    200: {code: 200, message:`Registro creado con exito`},
    201: {code: 201, message:`Registro editado con exito`},
    202: {code: 202, message:`Aceptado`},
    204: {code: 204, message:`Ejecución exitosa`},
    400: {code: 400, message:`Error al ejecutar la consulta`},
    401: {code: 401, message:`Es necesario autenticar para obtener la respuesta solicitada, Acceso no autorizado.`},
    403: {code: 403, message:`Usted no posee los permisos necesarios para este contenido.`},
    404: {code: 404, message:`No se pudo encontrar el contenido solicitado`},
    500: {code: 500, message:`Error interno del servidor`}
    };

class HandleMessage {
    constructor() {
        this.response = {};
    }
    statusCode(codeNumber) {
        if(!codes[codeNumber].code) {
            throw new Error(`el número de codigo de estado es invalido, statusCode: ${codeNumber}`);
        }
        this.response['code'] = codes[codeNumber].code;
        return this;
    }
    message(message) {
        if(this.response.code !== undefined) {

            if(message) {
                if(typeof message === 'string') {
                    this.response['data'] = { message: message };

                } else if (typeof message === 'object') {
                    this.response['data'] = message;
                }

            } else {
                this.response['data'] = { message: codes[this.response.code].message }
            }

        }else{
            throw new Error('Debe llamar al metodo statusCode primero');
        }
        return this;
    }

    get() {
        if(this.response.code === undefined) {
            throw new Error('Debe llamar al metodo statusCode y luego a otro metodo primero');
        }
        return this.response;
    }
}

module.exports = new HandleMessage();
