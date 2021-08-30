const mysql = require('mysql2/promise');

module.exports = new
    class Database{
        constructor(){
            this.err = "";
        };
        async conecta(){
            const config = {
                host: "den1.mysql1.gear.host",
                user: "projetotoariel",
                password: "Pe6Tm2Zn?32-",
                database: "projetotoariel"
            }
            try{
                this.connection = await new mysql.createConnection(config);
                return true;
            }
            catch(ex){
                return false;
            }
        }
        async consulta(sql, values){
            try{
                const [rows, fields] = await this.connection.execute(sql, values);
                
                return {
                    inteiro: 1,
                    status: true,
                    data: rows
                }
            }
            catch(ex){
                return {
                    inteiro: 2,
                    status: false,
                    err: ex.code,
                    message: ex.message,
                    data: []
                };
            }
        }
        async manipula(sql, values) {
            try{
              const [rows, fields] = await this.connection.execute(sql, values);
              if (rows.affectedRows > 0 )
              return {
                  status: true,
                  lastId: rows.insertId
              }
              return {
                  status: false,
                  err: "NOT_ROWS"
              };
            }
            catch(ex){
                return {
                    status: false,
                    err: ex.code,
                    message: ex.message
                }
            }
        }
    }