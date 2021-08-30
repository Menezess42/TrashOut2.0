const db = require('../models/DataBase');


module.exports = {
    async gravaemp(request, response){
        const {emp_nome,emp_cnpj, emp_senha, emp_rua,emp_bairro, emp_numero, emp_hAbertura, 
            emp_Hfechamento,emp_dAbertura,emp_dFechamento} = request.body;
        const con = await db.conecta();
        const sql = "INSERT INTO empresa"+"(emp_nome, emp_cnpj, emp_senha, emp_rua, emp_bairro, emp_numero, emp_hAbertura, emp_dAbertura, emp_dFechamento, emp_hFechamento)"+
        " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
        const valores = [emp_nome,emp_cnpj, emp_senha, emp_rua,emp_bairro, emp_numero, emp_hAbertura, 
            emp_dAbertura,emp_dFechamento,emp_Hfechamento];
        const result = await db.manipula(sql, valores);
        console.log(result);
        return response.json(result);
    },

    async validarEmpresa(request, response){
        const {emp_cnpj, emp_senha} = request.body;
        await db.conecta();
        const sql  = "SELECT * FROM empresa WHERE emp_cnpj = ? AND emp_senha = ?";
        const valores = [emp_cnpj, emp_senha];
        const result = await db.consulta(sql, valores);
        console.log(result);
        return response.json(result.data);
    },

    async pegarNome(request, response)
    {
        const {emp_cnpj} = request.params;
        await db.conecta();
        const sql  = "SELECT * FROM empresa WHERE emp_cnpj = ?";
        const valores = [emp_cnpj];
        const result = await db.consulta(sql, valores);
        console.log(result);
        return response.json(result.data);
    }

}