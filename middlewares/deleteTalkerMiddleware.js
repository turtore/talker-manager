const fs = require('fs');

const deleteTalkerMiddleware = (req, res, _next) => {
  const talkers = JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));

      const { id } = req.params;
      // console.log(id);
      
      const { name, age, talk } = req.body;
      console.log(talk);
      const editTalker = { id: Number(id), name, age, talk };
    //   const editedTalkers = talkers.map((talker) => { //       console.log(talker);  //     if (talker.id === editTalker.id) {   //         return editTalker;
    //     }
    //     return talker;
    // });
    // console.log(talkers);
    // fs.writeFileSync('./talker.json', JSON.stringify(editedTalkers));
    return res.status(200).json(editTalker);
};

module.exports = deleteTalkerMiddleware;