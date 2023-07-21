const Apparel = require('../models/apparel');

module.exports = {
    index,
    show,
    new: newApparel,
    create


};

async function index(req, res) {
    const apparels = await Apparel.find({});
    res.render('apparels/index', { title: 'All Apparels', apparels });
} 

async function show(req, res) {
    const sneaker = await Sneaker.findById(req.params.id);
    res.render('apparels/show', { title: 'Apparel Detail', apparel });
  }  

function newApparel(req, res) {
    res.render('apparels/new', { title: 'Add Apparel', errorMsg: '' });
} 

async function create(req, res) {
    // convert if sold checkbox of nothing or "on" to boolean
    req.body.sold = !!req.body.sold;
    req.body.name = req.body.name;
    //if (req.body.name) req.body.name = req.body.name.split(/\s*,\s*/);
    try {
    await Sneaker.create(req.body);
    res.redirect("/apparels");
    } catch (err) {
        // SOME validation error
        console.log(err);
        res.render('apparels/new', { title: 'Add Apparel', errorMsg: err.message });
      }
}

