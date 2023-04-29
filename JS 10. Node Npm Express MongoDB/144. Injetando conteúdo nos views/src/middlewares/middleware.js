exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este e o valor da variavel local.'
    next();
}