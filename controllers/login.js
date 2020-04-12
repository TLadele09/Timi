const Login = require('../models/login')

exports.postRegisterUser = (req, res) => {
    const login = new Login()
    const new_user = login.registerUser(req.body.firstname, req.body.surname, req.body.emailAddress, req.body.houseNumber, req.body.streetName, req.body.city, req.body.country, req.body.password)
    res.render('login', {title: 'LOGIN', path: '/login', data: new_user})
}

exports.getLogin = (req, res) => {
    res.render('login', {title: 'KBC Login', path: '/login'})
}
