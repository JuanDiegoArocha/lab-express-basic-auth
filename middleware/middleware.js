function actualLogged (req, res, next) {
    if (req.session.username === undefined) {
        res.redirect("/");
    } else {
        next();
    } 
}


module.exports = actualLogged; 