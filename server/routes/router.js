
const express = require('express')
const route = express.Router()
route.get('/', (req, res) => {
    res.render("index")
})

route.get('/add_user', (req, res) => {
    res.render("add_user")
})

route.get('/update_user', (req, res) => {
    user = {
        id: 2,
        name: "daniya",
        gender: "Female",
        status: "Active"
    }
    res.render("update_user", { user: user })
})

module.exports = route