var express = require('express');
var router = express.Router();
const apparelsCtrl = require('../controllers/apparels');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', apparelsCtrl.index);

router.get('/new', ensureLoggedIn, apparelsCtrl.new);

router.get('/:id', apparelsCtrl.show);

router.post('/', ensureLoggedIn, apparelsCtrl.create);

module.exports = router;