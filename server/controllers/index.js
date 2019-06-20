var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          console.log('this is an error');
        } else {
          res.send(data);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.body.roomname = 'lobby';
      req.body.username = 'Adel';
      req.body.txt = 'side';
      models.messages.post(req.body);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

