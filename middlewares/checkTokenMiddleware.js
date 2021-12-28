const checktokenMiddleware = (req, res, next) => {
    const { token } = req.headers.authorization;

    // if (token === undefined) {
    //     return res.status(401).json({ message: 'Token não encontrado' });
    // }
    if (token === undefined || token.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
   }
    next();
};

module.exports = checktokenMiddleware;