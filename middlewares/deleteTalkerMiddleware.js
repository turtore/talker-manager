const fs = require('fs');

const deleteTalkerMiddleware = (req, res, _next) => {
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

      const { id } = req.params;
      // console.log(id);
      const toBeDeleted = talkers.findIndex((talker) => talker.id === id);
      talkers.splice(toBeDeleted, 1);
      fs.writeFileSync('./talker.json', JSON.stringify(talkers));
      console.log(talkers);

      return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

module.exports = deleteTalkerMiddleware;