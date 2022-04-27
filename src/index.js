const server = require('./models/server');
require('dotenv').config()

server.cors();
server.settings();
server.routes();
server.handlerError();
server.conectarDB();