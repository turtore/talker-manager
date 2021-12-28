const talkerMiddleware = (req, res, _next) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    // const newTalker = { name, age, talk: { watchedAt, rate } };

      return res.status(201).json({ name, age, talk: { watchedAt, rate } });
};

module.exports = talkerMiddleware;