const express = require('express');
const bodyParser = require('body-parser')
const home_routes = require('./routes/home')
const shop_routes = require('./routes/shop')
const mens_routes = require('./routes/mens')
const womens_routes = require('./routes/womens')
const contact_routes = require('./routes/contact')
const about_routes = require('./routes/about')
const login_routes = require('./routes/login') 
const signup_routes = require('./routes/signup')
const cart_routes = require('./routes/cart')
const path = require('path')
const app = express();
//middleware
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')));
//routes 
app.use(home_routes);

app.use(shop_routes);

app.use(contact_routes);

app.use(about_routes);

app.use(mens_routes);

app.use(womens_routes);

app.use(login_routes);

app.use(signup_routes);

app.use(cart_routes);

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(3000);

