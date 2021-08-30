const db = require('../models/DataBase');


module.exports = {
    async gravarEco(request, response){
        const {eco_nome, eco_rua, eco_bairro, eco_numero, eco_cep,emp_cnpj, resi_cod} = request.body;
        await db.conecta();     //                1         2         3       4              5     6         7
        console.log(eco_nome, eco_rua,eco_bairro, eco_numero, eco_cep,emp_cnpj,resi_cod);
        const sql = "INSERT INTO ecopontos(eco_nome, eco_rua, eco_bairro, eco_numero, eco_cep, emp_cnpj, resi_cod)"+
        "VALUES (?, ?, ?, ?, ?, ?, ?)";
        const valores = [eco_nome, eco_rua, eco_bairro, eco_numero, eco_cep,emp_cnpj, resi_cod];
        const result = await db.manipula(sql, valores);
        console.log(result);
        return response.json(result);
    }

}