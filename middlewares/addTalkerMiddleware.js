const fs = require('fs');

const addTalkerMiddleware = (req, res, _next) => {
  // receber diretamente como objeto
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  // pega id do ultimo na lista e incrementa
  const newId = talkers.length + 1;
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const newTalker = { 
    id: newId,
    name, 
    age, 
    talk: { watchedAt, rate }, 
  };
  // console.log(newTalker);
    // escreve no arquivo local
  const updatedTalkers = [...talkers, newTalker];
  fs.writeFileSync('./talker.json', JSON.stringify(updatedTalkers));

  return res.status(201).json(newTalker);
};

module.exports = addTalkerMiddleware;