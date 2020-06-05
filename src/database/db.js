//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

//utilizar o objeto de banco de dados
db.serialize(() => {

    //criar uma tabela
/*     db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)



    //inserir dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items 
        ) VALUES (?,?,?,?,?,?,?);        
    `
    const values  = [
        "Paperside",
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData) */



    
    //consultar os dados
   /*  db.all(`SELECT id FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
 */
    

    //deletar dados
    /* db.run(`DELETE FROM places WHERE id = ?`, [20], function(err){
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
    })
    */

}) 