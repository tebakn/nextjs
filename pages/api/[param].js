

export default (req, res) => {
  //console.log(req)

  res.end(JSON.stringify({Post: req.query.param}))
}