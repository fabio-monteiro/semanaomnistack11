const express = require("express");
const OngController = require("./controllers/OngController")
const IncidentController = require("./controllers/IncidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")
const routes = express.Router();

/** 
* Rota / Recurso
*/

/** 
* Métodos HTTP:
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end 
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MSSQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

routes.post('/sessions', SessionController.create );

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('incidents/:id',IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;