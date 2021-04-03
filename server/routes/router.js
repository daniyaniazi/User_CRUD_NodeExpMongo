const services = require('../services/render')
const express = require('express')
const route = express.Router()

/*
@description root route
@method : GET
*/
route.get('/', services.homeRoutes)

route.get('/add_user', services.addUser)

route.get('/update_user', services.updateUser)

module.exports = route