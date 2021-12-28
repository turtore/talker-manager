const checkTalkMiddleware = (req, res, next) => {
    const { watchedAt } = req.body.talk;

    console.log(watchedAt);

    if (!(watchedAt instanceof Date)) {
        return res.status(400).json({ 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

module.exports = checkTalkMiddleware;