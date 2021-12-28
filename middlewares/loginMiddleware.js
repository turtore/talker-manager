const loginMiddleware = (req, res, next) => {
    const { email } = req.body;

    if (!email || email === '') {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (/\S+@\S+\.\S+/.test(email) === false) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

module.exports = loginMiddleware;

// token gerado