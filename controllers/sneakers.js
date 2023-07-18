module.exports = {
    new: newSneaker
};

function newSneaker(req, res) {
    res.render('sneakers/new', { errorMsg: '' });
} 