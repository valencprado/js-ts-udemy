exports.home = (req, res) => {
  res.render('index');
}

exports.exemploPost = (req, res) => {
    res.send(req.body);
}