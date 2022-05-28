const express = require("express")
const db = require("../database")

const router = express.Router()
router.use((req, res, next) => {
  console.log("Request made to /users")
  next()
})

// get user lists
router.get("/list", (_req, res) => {
  const sql = `SELECT * FROM facultyapi`
  db.query(sql, (err, data, _fields) => {
    if (err) throw err
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
    })
  })
})

// create new user
/* router.post("/", (req, res) => {
  console.log(req.body)
  res.json({
    status: 200,
    message: "New user added successfully",
  })
})
*/
router.post("/", (req, res) => {
  const sql = `INSERT INTO facultyapi(name, task) VALUES (?)`
  const values = [req.body.name, req.body.task]
  db.query(sql, [values], (err, _data, _fields) => {
    if (err) throw err
    res.json({
      status: 200,
      message: "New user added successfully",
    })
  })
})

module.exports = router
