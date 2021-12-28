const tokenMiddleware = (req, res, _next) => {
    const accessToken = '7mqaVRXJSp886CGr';
    if (accessToken.length !== 16) {
     return res.status(400).json({ message: 'token inválido' });
}

    return res.status(200).json({ token: accessToken });
};

module.exports = tokenMiddleware;