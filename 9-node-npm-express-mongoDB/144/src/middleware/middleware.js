module.exports = (req, res, next) => {
    res.locals.variavelLocal = 'teste';
    next();
}