

module.exports = app => {

    app.use('/user', require('./user.routes.js'))
    app.use('/dog', require('./dog.routes.js'))
    app.use("/auth", require("./auth.routes"))

}