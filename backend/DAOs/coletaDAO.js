const db = require('../models/DataBase');


module.exports = {
    async gravaColeta(request, response){
        const {col_data,col_bairro, col_rua, col_numero, col_obs, usu_login, resi_cod} = request.body;
        await db.conecta();    
        console.log(col_data,col_bairro, col_rua, col_numero, col_obs, usu_login, resi_cod);
        const sql = "INSERT INTO coleta(coleta_daSolicitacao, coleta_bairro, coleta_rua, coleta_numero, coleta_obs, usu_login, resi_cod)"+
        "VALUES (?, ?, ?, ?, ?, ?, ?)";
        const valores = [col_data,col_bairro,col_rua, col_numero, col_obs, usu_login, resi_cod];
        const result = await db.manipula(sql, valores);
        console.log(result);
        return response.json(result.data);
    }
}