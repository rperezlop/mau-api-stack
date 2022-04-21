const Errr = require('errr');

const handleError = (err, req, res) => {
    const error = Errr.newError(err)
        .set('errorCode', 400)
        .debug(req.headers.referer)
        .appendTo(err).get();
    console.error(error.stack)

    if(error.message.indexOf('ValidationError') === 0) {
        const validation = error.message.split('ValidationError: ');
            error.message = `Error de validación: ${validation[1]}`;
        }

    return res.status(400).json( { error: error.errorCode, message: error.message } );
};

module.exports =  handleError;
