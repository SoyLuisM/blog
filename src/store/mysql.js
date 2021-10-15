const mysql = require('mysql');

const config = require('../../config');

const dbconfig = {
    host: config.config.host_mysql,
    user: config.config.user_mysql,
    password: config.config.password_mysql,
    database: config.config.database_mysql
}

let connection;

function handleCon(){
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
          if (err){
                console.error('[db err]', err);
                setTimeout(handleCon, 2000);
          }
          else{
                console.log('db conectada');
          }
    });

    connection.on('error', err => {
          console.error('[db err]', err);
          if(err.code==='PROTOCOL_CONNECTION_LOST'){
                handleCon();
          }else{
                throw err;
          }
    });
}
handleCon();

function insert(table, data){
      return new Promise((resolve,reject)=>{
            connection.query(`INSERT INTO ${table} SET ?`,data, (err, result)=>{
                  if(err){
                        return reject(err);
                  }
                  resolve(result);
            });
      });
}

module.exports = {
      insert
}