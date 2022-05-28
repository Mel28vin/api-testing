const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "Nodeuser@1234",
  database: "faculty",
})

module.exports = db
