const yup = require('yup');

const createClienteValidator = (data) => {
    const schema = yup.object().shape({
        identificationTypeId:
            yup.number()
                .typeError('El campo tipo de identificación no es un número')
                .required('El campo tipo de identificación es requerido')
                .positive('El campo tipo de identificación no es válido')
                .integer('El campo tipo de identificación no es un entero'),

        identification:
            yup.string('El campo identificación no es válido')
                .matches(/^[0-9]+$/, 'El campo identificación no es un número')
                .max(12, 'la identificación debe ser menor o igual a 12')
                .min(1, 'la identificación debe ser mayor 1')
                .required('El campo identificación es requerido'),
        names:
            yup.string()
                .required('El campo nombres es requerido'),

        lastName:
            yup.string()
                .required('El campo apellidos es requerido'),
        ciudad:
                yup.string()
                    .required('El campo ciudad es requerido'),
        address:
                    yup.string()
                        .required('El campo dirección es requerido'),
        phone:
            yup.string()
                .matches(/^[0-9]+$/, ({ value }) => `${value} no es un teléfono válido`)
                .min(1, ({ value }) => `El teléfono ${value} debe ser mayor a cero`)
                .max(20, ({ value }) => `El teléfono ${value} debe ser menor ó igual a 20`)
                .required('El campo teléfono es requerido'),
        email:
            yup.string()
                .email(({ value }) => `El email ${value} no es válido `)
                .required('El campo email es requerido'),
    

    });
    schema.validateSync(data);
};

module.exports = {
    createClienteValidator

}