const db = require('../models');

module.exports = {
    create(req, res) {
        db.User.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    }
}