

const db = require("../models");


module.exports = {
    addNewUser: function(req, res) {
      const userObj = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
          lastName: req.body.lastName
      }
      db.User.create(userObj)
      .then(dbUser => res.status(200).send({ success: true, dbUser }))
      // .then(dbUser => {
      //   console.log("this is dbuser:", dbUser)
      //   res.status(200).send({ success: true})
      // })
        .catch(err => {
          console.log(err)
        });
    },
    // findAll: function(req, res) {
    //   db.User.find({})
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err));
    // },
    // findById: function(req, res) {
    //   db.User.findOne({_id: req.params.id})
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err));
    // },
    // findByUsername: function(req, res) {
    //   db.User.findOne({username: req.params.username})
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.status(422).json(err));
    // }
  }
    