const sqlite = require('sqlite-sync')
const md5 = require('md5')

module.exports = app => {
  const DBSOURCE = "db.sqlite"

  sqlite.connect(DBSOURCE)

  sqlite.run(`CREATE TABLE user (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name text, 
          email text UNIQUE, 
          password text, 
          CONSTRAINT email_unique UNIQUE (email)
          )`,
  (res) => {
    if (res.errorr) {
      // Table already created
    }else{
      // Table just created, creating some rows
//      var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
//      sqlite.run(insert, ["admin","admin@example.com",md5("admin123456")])
//      sqlite.run(insert, ["user","user@example.com",md5("user123456")])
    }
  });  
  return sqlite
}