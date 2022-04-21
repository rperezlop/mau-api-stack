const express = require('express');
const app = express()
const routersVersion = require('../lib/routesVersion');
const cors = require('cors');
const conection = require('../database/conexion');


const init = {

    routes() {
        const port = process.env.PORT || 8000;
        app.set('port', port);
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
        app.use('/', [routersVersion]);
    },
    handlerError() {
        // Manejando errores HTTP 404 para solicitudes de contenido inexistente
        app.use((req, res, next) => {
          const err = new Error('Not Found');
          err.status = 404;
          next(err);
    
        });
    // Manejo de errores, respuestas con codigo HTTP 500, HTTP 404
        app.use((err, req, res, next) => {
          res.status(400).json({
            status: 'Error',
            message: err.message
          });
        });
      },
      
  cors() {
    const corsOptions = {
      origin: ['http://localhost:8000'],
      methods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 200
    };

    app.use(cors(corsOptions));
  },
    async conectarDB() {
        let conn;
        try {
            conn = await conection.getConnection();
            console.log(`✔ conexión a base de datos...`)

        } catch (err) {
            console.log('error base dedatos');
            throw err;
        } finally {
            if (conn) await conn.release(); //release to pool
        }
    },

}
module.exports = init;