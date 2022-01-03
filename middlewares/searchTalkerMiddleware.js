const fs = require('fs');

const searchTalkerMiddleware = (req, res, _next) => {
    const { q } = req.query;
    const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
    if (!q || q === '') {
        res.status(200).json(talkers);    
    }
    const foundTalker = talkers.filter((talker) => talker.name.includes(q));
    res.status(200).json(foundTalker);
};

module.exports = searchTalkerMiddleware;