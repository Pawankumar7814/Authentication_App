module.exports.signin = function(req, res) {
    return res.status(200).render('users/signin');
}

module.exports.profile = function(req, res) {
    return res.status(200).render('users/profile');
}