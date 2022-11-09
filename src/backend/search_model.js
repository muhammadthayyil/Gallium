const Pool = require('pg').Pool //pool must be the postgresql object
const pool = new Pool({ //credentials
    user: 'my_user',
    host: 'localhost',
    database: '4347Proj',
    password: 'Mankada!23',
    port: 5432
})

const findBook = (body) => { 
    return new Promise(function (resolve, reject) {
      const { Isbn10, author, title} = body; 
      pool.query("SELECT * FROM Book WHERE Isbn10 = $1 AND Author = $2 AND Title = $3",
       [Isbn10, author, title], 
       (error, results) => {
        if (error) { //error handling
          reject(error);
        }
        if(results.rowCount === 0)
            resolve(`Login Invalid!`); //display rows in the database in form of json
        else
            resolve(`Login Validated!`);
      });
    });
  };

  module.exports = {
      getUser
  };
