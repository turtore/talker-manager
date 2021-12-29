const checkTalkMiddleware = (req, res, next) => {
    const { talk } = req.body;
    // precisei alterar talk.rate na comparação para undefined pois não passava quando recebia valor 0
    if (!talk || !talk.watchedAt || talk.rate === undefined) {
        console.log(talk);
        return res.status(400).json({ 
            message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
        }
    next();
};

module.exports = checkTalkMiddleware;