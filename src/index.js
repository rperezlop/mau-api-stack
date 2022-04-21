const server = require('./models/server');
require('dotenv').config()


server.routes();
server.handlerError();
server.cors();

server.conectarDB();