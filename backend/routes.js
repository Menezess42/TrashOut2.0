const { Router } = require('express');
const routes = Router();

const usuDAO = require('./DAOs/usuDAO');
const empDAO = require('./DAOs/empDAO');
const resDAO = require('./DAOs/residuoDAO');
const ecoDAO = require('./DAOs/ecoDAO');
const colDAO = require('./DAOs/coletaDAO');

routes.post('/gravaemp', empDAO.gravaemp);
routes.post('/empresa/login', empDAO.validarEmpresa);

routes.post('/gravarEco', ecoDAO.gravarEco);
routes.post('/gravaColeta', colDAO.gravaColeta);

routes.get('/empresa/:emp_cnpj', empDAO.pegarNome);
routes.post('/gravausuario', usuDAO.gravarUsuario);
routes.post('/usuario/login', usuDAO.validarUsuario);
routes.get('/usuario/:usu_login', usuDAO.alterar);

routes.get('/residuos', resDAO.listarResi);
routes.post('/gravarResi', resDAO.gravarResi);

routes.put('/gravausuario', usuDAO.gravarAlteracao);
module.exports = routes;