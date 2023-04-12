exports.home = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro: <input type="text" name="outro">
    <button>Enviar</button>
    </form>
    `
    );
}

exports.exemploPost = (req, res) => {
    res.send("Nova rota de POST!");
}