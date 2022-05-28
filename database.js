const mysql = require("mysql")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "facultyapi",
})

module.exports = db
