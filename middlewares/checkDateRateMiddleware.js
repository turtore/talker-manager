const verifyDate = (date) => {
    const [day, month, year] = date.split('/');
    // referencia para encontrar solução https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
    if ((new Date(`${month}/${day}/${year}`)).toString() === 'Invalid Date') {
        // console.log('entrou data invalida');
        return false;
    }
    return true;
};

const checkDateRateMiddleware = (req, res, next) => {
    const { talk } = req.body;
    const { watchedAt, rate } = talk;
    // console.log(rate);
    if (!verifyDate(watchedAt)) {
        return res.status(400).json({ 
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    if (rate < 1 || rate > 5) {
        return res.status(400).json({ 
            message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }    
    next();
};

module.exports = checkDateRateMiddleware;