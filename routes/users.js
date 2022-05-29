const express = require("express")
const db = require("../database")

const router = express.Router()

router.get("/list", (_req, res) => {
  const sql = `SELECT * FROM staff`
  db.query(sql, (err, data, _fields) => {
    if (err) throw err
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
    })
  })
})

router.post("/create", (req, res) => {
  const sql = `INSERT INTO staff(name, task, deadline, status, priority) VALUES (?)`
  const values = Object.values(req.body)
  db.query(sql, [values], (err, _data, _fields) => {
    if (err) throw err
    res.json({
      status: 200,
      message: "New user added successfully",
    })
  })
})

router.patch("/update", (req, res) => {
  const { name, status, priority } = req.body
  let update
  if (status && priority) update = `status="${status}", priority="${priority}"`
  else if (status) update = `status="${status}"`
  else if (priority) update = `priority="${priority}"`
  db.query(
    `UPDATE staff SET ${update} WHERE name="${name}"`,
    (err, data, _fields) => {
      if (err) throw err
      res.json({
        status: 200,
        data,
        message: "Updated successfully",
      })
    }
  )
})

router.delete("/delete", (req, res) => {
  const { name } = req.body
  db.query(`DELETE FROM staff WHERE name="${name}"`, (err, _data, _fields) => {
    if (err) throw err
    res.json({
      status: 200,
      message: "Deleted successfully",
    })
  })
})

module.exports = router
