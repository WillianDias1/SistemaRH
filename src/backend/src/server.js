/**
 * Driver: select * from users;
 * Query Builders: table('users').select('*').where('')
 */

/*
*GET: Buscar/listar uma informação no backend
*POST: Criar uma informação no backend
*Para comentar um trecho de código: 'Crtl+;'
*PUT: Alterar uma informação no backend
*DELETE: Deletar uma informação no backend
*/

/**
 * Parâmentros
 * Query: Recebe parâmentros nomeados na rota
 * Route params: parâmentros utilizados para identificar um recurso
 * Request.Body: corpo da requisição
 * 
 */

const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3001);