const Sneaker = require('../models/sneaker');

module.exports = {
    new: newSneaker,
    create
};

function newSneaker(req, res) {
    res.render('sneakers/new', {errorMsg: '', title: '' });
} 

async function create(req, res) {
    // convert if sold checkbox of nothing or "on" to boolean
    req.body.sold = !!req.body.sold;
    req.body.name = req.body.name;
    if (req.body.name) req.body.name = req.body.name.split(/\s*,\s*/);
    try {
    await Sneaker.create(req.body);
    res.redirect("/sneakers/new");
    } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('sneakers/new', { errorMsg: err.message });
      }
}
  
  