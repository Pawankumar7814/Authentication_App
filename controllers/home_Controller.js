module.exports.home = function(req, res) {
    return res.status(200).render('mainpages/home', { title: "Home" });
}