const checktokenMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log(authorization);

    if (!authorization || authorization === undefined) {
        console.log('nao encontrado');
        return res.status(401).json({ message: 'Token não encontrado' });
    }

    if (authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
   }
    next();
};

module.exports = checktokenMiddleware;