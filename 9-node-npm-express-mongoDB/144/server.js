require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(err => console.log(err));

const session = require('express-session');
const mongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")));

const sessionOptions = session({
    secret: 'segredinho',
    store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 3600 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// nossos middleware
app.use(meuMiddleware);
app.use(routes);
app.on("pronto", () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("Rodando na porta 3000!");
    });

})

