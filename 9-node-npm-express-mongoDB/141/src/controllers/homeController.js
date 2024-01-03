exports.home = (req, res) => {
  //  console.log(req.session.usuario)
  console.log(req.flash('info'));
  console.log(req.flash('error'));
  console.log(req.flash('success'));

  res.render('index');
}

exports.exemploPost = (req, res) => {
    res.send(req.body);
}