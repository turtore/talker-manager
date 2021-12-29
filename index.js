const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// entradas
const fs = require('fs');
const loginMiddleware = require('./middlewares/loginMiddleware');
const tokenMiddleware = require('./middlewares/tokenMiddleware');
const passwordMiddleware = require('./middlewares/passwordMiddleware');
const addTalkerMiddleware = require('./middlewares/addTalkerMiddleware');
const checktokenMiddleware = require('./middlewares/checkTokenMiddleware');
const checkNameMiddleware = require('./middlewares/checkNameMiddleware');
const checkAgeMiddleware = require('./middlewares/checkAgeMiddleware');
const checkTalkMiddleware = require('./middlewares/checkTalkMiddleware');
const checkDateRateMiddleware = require('./middlewares/checkDateRateMiddleware');
const editTalkerMiddleware = require('./middlewares/editTalkerMiddleware');

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
  
  if (!person) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  
  res.status(200).send(person);   
 });
});

// requisito 3, criado middleware chamado loginMiddleware para verificar username, passwordMiddleware para senha e outro middleware chamado tokenMiddleware para enviar o token
app.post('/login', loginMiddleware, passwordMiddleware, tokenMiddleware);

// requisito 4
app.post('/talker', 
checktokenMiddleware,
checkNameMiddleware, 
checkAgeMiddleware, 
checkTalkMiddleware,
checkDateRateMiddleware,
addTalkerMiddleware);

// requisito 5
app.put('/talker/:id', 
checktokenMiddleware,
checkNameMiddleware,
checkAgeMiddleware, 
checkTalkMiddleware,
checkDateRateMiddleware,
editTalkerMiddleware);

// requisito 6
app.delete('/taler/:id',
checktokenMiddleware);

app.listen(PORT, () => {
  console.log('Online');
});
