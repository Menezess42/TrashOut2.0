const db = require('../models/DataBase');


module.exports = {
    async listarResi(request, response){
        await db.conecta();
        const sql  = "SELECT * FROM residuo";
        const result = await db.consulta(sql);
        console.log(result);
        return response.json(result.data);
    },
    
    async gravarResi(request, response){
        const {resi_tipo, resi_descri} = request.body;
        const con = await db.conecta();
        const sql = "INSERT INTO residuo"+"(resi_tipo, resi_descri)"+
        " VALUES (?, ?) ";
        const valores = [resi_tipo, resi_descri];
        const result = await db.manipula(sql, valores);
        console.log(result);
        return response.json(result);
    }

}