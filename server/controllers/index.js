var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      console.log('ASDFASDF', models);
      models.messages.get((err, data) => {
        if (err) {
          console.log('this is an error');
        } else {
          console.log(data);
          res.send(data);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.body.roomname = 'this is room';
      req.body.username = 'this is username';
      req.body.txt = 'this is my message';
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

