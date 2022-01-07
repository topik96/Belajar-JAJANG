/ POST /login

if (req.body.email && req.body.password) {

} else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
}
