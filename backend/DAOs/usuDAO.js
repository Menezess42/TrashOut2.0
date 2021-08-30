const db = require('../models/DataBase');


module.exports = {
    async gravarUsuario(request, response){
        const {usu_nome, usu_login, usu_senha, usu_dataNasc} = request.body;
        console.log(usu_nome);
        console.log(usu_login);
         await db.conecta();
        const sql = "INSERT INTO usuario"+"(usu_nome, usu_login, usu_senha, usu_dataNasc)"+
        " VALUES (?, ?, ?, ?) ";
        const valores = [usu_nome, usu_login, usu_senha, usu_dataNasc];
        const result = await db.manipula(sql, valores);
        console.log(result);
        return response.json(result);
    },

    async validarUsuario(request, response){
        const {usu_login, usu_senha} = request.body;
        await db.conecta();
        const sql  = "SELECT * FROM usuario WHERE usu_login = ? AND usu_senha = ?";
        const valores = [usu_login, usu_senha];
        const result = await db.consulta(sql, valores);
        console.log(result);
        return response.json(result.data);
    },

    async alterar(request, response)
    {
        const {usu_login} = request.params;
        await db.conecta();
        const sql  = "SELECT * FROM usuario WHERE usu_login = ?";
        const valores = [usu_login];
        const result = await db.consulta(sql, valores);
        console.log(result);
        return response.json(result.data);
    },

    async gravarAlteracao(request, response) {
        const {usu_nome, usu_login, usu_senha, usu_dataNasc} = request.body;
         await db.conecta();
        const sql = "UPDATE usuario SET usu_nome = ?, usu_senha = ?, usu_dataNasc = ?" + 
                    " WHERE usu_login = ? ";
        const valor = [usu_nome,  usu_senha, usu_dataNasc, usu_login];
        const result = await db.manipula(sql, valor);
        console.log(result);
        return response.json(result);
    },
}