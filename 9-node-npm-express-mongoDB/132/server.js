const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro: <input type="text" name="outro">
    <button>Enviar</button>
    </form>
    `
    );
});
app.get('/testes/:id?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.id);
});


app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Nome recebido: ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Rodando na porta 3000!");
});