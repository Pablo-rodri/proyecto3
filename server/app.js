
require("dotenv/config")

require("./db")

const express = require("express")
const app = express()

require("./config")(app)
require("./config/cors.config")(app)
require("./config/session.config")(app)

require("./routes")(app)

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));
module.exports = app
