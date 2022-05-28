const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const server = {
  port: 3000,
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const usersRouter = require("./routes/users")

app.use("/users", usersRouter)

app.listen(server.port, () =>
  console.log(`Server started and listening on port: ${server.port}`)
)
