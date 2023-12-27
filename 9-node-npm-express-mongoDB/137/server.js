const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
// nossos middleware
app.use(meuMiddleware);
app.use(routes);
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Rodando na porta 3000!");
});

