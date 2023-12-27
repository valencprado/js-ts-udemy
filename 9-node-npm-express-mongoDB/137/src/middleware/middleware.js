module.exports = (req, res, next) => {
    console.log("Passei no middleware global")
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace("Teste", "Teste é inválido")
        console.log(`Nome: ${req.body.cliente}`)
    }
    next();
}