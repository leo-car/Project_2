var express = require('express');
var router = express.Router();

const sneakersCtrl = require('../controllers/sneakers');

router.get('/new', sneakersCtrl.new);

router.post('/', sneakersCtrl.create);

module.exports = router;