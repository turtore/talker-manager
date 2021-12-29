const fs = require('fs');

const editTalkerMiddleware = (req, res, _next) => {
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  try {
      const { id } = req.params;
      
      const { name, age, talk } = req.body;
      const editTalker = { id: Number(id), name, age, talk };
      
      const finalEditedTalkers = talkers.map((talker) => 
      (editTalker.id === talker.id ? editTalker : talker));
    
     fs.writeFileSync('./talker.json', JSON.stringify(finalEditedTalkers));
    return res.status(200).json(editTalker);
  } catch (error) {
      return res.status(400).json({ message: 'not found id' });
  }
};

module.exports = editTalkerMiddleware;