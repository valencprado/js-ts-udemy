const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Rodando na porta 3000!");
});