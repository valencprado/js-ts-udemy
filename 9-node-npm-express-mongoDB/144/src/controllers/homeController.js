exports.home = (req, res) => {
  res.render('index', {titulo: "Esse é um título", array:[1, 2, 3, 4, 5, 2]});
}

exports.exemploPost = (req, res) => {
    res.send(req.body);
}