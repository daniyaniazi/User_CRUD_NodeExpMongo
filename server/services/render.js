exports.homeRoutes = (req, res) => {
    res.render("index")
}

exports.addUser = (req, res) => {
    res.render("add_user")
}

exports.updateUser = (req, res) => {
    user = {
        id: 2,
        name: "daniya",
        gender: "Female",
        status: "Active"
    }
    res.render("update_user", { user: user })
}