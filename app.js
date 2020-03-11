const express = require('express');
const bodyParser = require('body-parser')
const home_routes = require('./routes/home')
const contact_routes = require('./routes/contact')
const about_routes = require('./routes/about')
const shop_routes = require('./routes/shop')
const login_routes = require('./routes/login') 
const signup_routes = require('./routes/signup')
const mens_routes = require('./routes/mens')
const womens_routes = require('./routes/womens')
const cart_routes = require('./routes/cart')
const delivery_routes = require('./routes/delivery')
const payment_routes = require('./routes/payment')
const mensjumpers_routes = require('./routes/mensjumpers')
const womensjumpers_routes = require('./routes/womensjumpers')
const menstshirts_routes = require('./routes/menstshirts')
const womenstshirts_routes = require('./routes/womenstshirts')
const menshoodies_routes = require('./routes/menshoodies')
const womenshoodies_routes = require('./routes/womenshoodies')
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

app.use(mensjumpers_routes);

app.use(menstshirts_routes);

app.use(womenstshirts_routes);

app.use(womens_routes);

app.use(womensjumpers_routes);

app.use(menshoodies_routes);

app.use(womenshoodies_routes);

app.use(login_routes);

app.use(signup_routes);

app.use(cart_routes);

app.use(payment_routes);

app.use(delivery_routes);

app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(3000);

