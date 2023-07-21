const Sneaker = require('../models/sneaker');

module.exports = {
  create
  // Add this export
  
};



async function create(req, res) {
  const sneaker = await Sneaker.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  sneaker.reviews.push(req.body);
  try {
    // Save any changes made to the sneaker doc
    await sneaker.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/sneakers/${sneaker._id}`);
}

