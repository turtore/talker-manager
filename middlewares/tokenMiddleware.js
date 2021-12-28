// função de gerar string retirada de https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 const createToken = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() 
 * charactersLength));
   }
   return result;
};

const tokenMiddleware = (_req, res, _next) => {
    const token = createToken(16);
    if (token.length !== 16) {
     return res.status(400).json({ message: 'token inválido' });
}

    return res.status(200).json({ token });
};

module.exports = tokenMiddleware;