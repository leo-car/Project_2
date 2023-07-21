const Sneaker = require('../models/sneaker');

module.exports = {
    index,
    show,
    new: newSneaker,
    create,
    
    };

async function index(req, res) {
    const sneakers = await Sneaker.find({});
    res.render('sneakers/index', { title: 'All Sneakers', sneakers });
} 

async function show(req, res) {
    const sneaker = await Sneaker.findById(req.params.id);
    res.render('sneakers/show', { title: 'Sneaker Detail', sneaker });
  }  

function newSneaker(req, res) {
    res.render('sneakers/new', { title: 'Add Sneaker', errorMsg: '' });
} 

async function create(req, res) {
    // convert if sold checkbox of nothing or "on" to boolean
    req.body.sold = !!req.body.sold;
    req.body.name = req.body.name;
    //sif (req.body.name) req.body.name = req.body.name.split(/\s*,\s*/);
    try {
    const sneaker = await Sneaker.create(req.body);
    res.redirect(`/sneakers/${sneaker._id}`);
    } catch (err) {
        // SOME validation error
        console.log(err);
        res.render('sneakers/new', { title: 'Add Sneaker', errorMsg: err.message });
      }
}





