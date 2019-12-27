const Login = require('../models/login')

exports.postRegisterUser = (req, res) => {
    const login = new Login()
    const new_user = login.registerUser(req.body.name, req.body.emailAddress, req.body.password)
    res.render('login', {title: 'LOGIN', path: '/login'})
}

exports.getLogin = (req, res) => {
    res.render('login', {title: 'LOGIN', path: '/login'})
}
