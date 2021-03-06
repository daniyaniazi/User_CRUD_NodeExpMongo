const axios = require("axios")

exports.homeRoutes = (req, res) => {
    //make get req
    axios.get("http://localhost:3000/api/users").then(function (response) {
        res.render("index", { users: response.data })
    }).catch(err => console.log(err))

}

exports.addUser = (req, res) => {
    res.render("add_user")
}

exports.updateUser = (req, res) => {
    axios.get("http://localhost:3000/api/users", { params: { id: req.query.id } }).then(function (response) {
        res.render("update_user", { user: response.data })
    }).catch(err => console.log(err))

}