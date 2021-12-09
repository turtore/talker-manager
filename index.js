const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// entradas
const fs = require('fs');

const talkerFile = 'talker.json';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 1
app.get('/talker', (req, res) => {
   fs.readFile(talkerFile, 'utf8', (err, data) => {
      if (err) {
        console.error(`Não foi possível ler o arquivo ${talkerFile}\n Erro: ${err}`);
        process.exit(1);
      }
      res.status(200).send(JSON.parse(data));    
    });
});

// requisito 2
app.get('/talker/:id', (req, res) => {
  fs.readFile(talkerFile, 'utf8', (err, data) => {
   if (err) {
     console.error(`Não foi possível ler o arquivo ${talkerFile}\n Erro: ${err}`);
     process.exit(1);
   }
  const { id } = req.params;
  const person = JSON.parse(data).find((t) => t.id === parseInt(id, 10));
  console.log(data);
  
  if (!person) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  
  res.status(200).send(person);   
 });
});

app.listen(PORT, () => {
  console.log('Online');
});
